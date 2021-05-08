import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import { CEP } from '../entity/CEP';
import CustomError from '../errors/custom';
import { getCEPInfo } from '../services/viaCEP';
import { maskCEP } from '../utils/maskCEP';
import HistoryController from './HistoryController';

class CEPsController {
  static async details(req: Request, res: Response) {
    try {
      const cep = req.params.cep.match(/\d+/g)?.join('');

      if (!cep || cep?.length !== 8)
        throw new CustomError('O CEP deve conter 8 números!');

      let cepInfo: CEPInfo | null = null;
      const cepRepository = getMongoRepository(CEP);
      const dbResponse = await cepRepository.findOne({ cep: maskCEP(cep) });

      if (dbResponse) {
        cepInfo = dbResponse;
      } else {
        const viaCEPResponse = await getCEPInfo(cep);

        cepInfo = {
          cep: viaCEPResponse.cep,
          city: viaCEPResponse.localidade,
          uf: viaCEPResponse.uf,
          publicPlace: viaCEPResponse.logradouro,
          district: viaCEPResponse.bairro,
          complement: viaCEPResponse.complemento,
          ddd: viaCEPResponse.ddd,
        };

        const newCEP = cepRepository.create({
          ...cepInfo,
        });

        cepRepository.save(newCEP);
      }

      await HistoryController.addToHistory(cepInfo);

      return res.status(200).send(cepInfo);
    } catch (err) {
      if (err.name === 'CustomError') {
        return res.status(500).send({ error: err.message });
      }

      return res
        .status(500)
        .send({ error: 'Ocorreu um erro ao resgatar o CEP!' });
    }
  }
}

export default CEPsController;
