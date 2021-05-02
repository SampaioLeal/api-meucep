import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import { History } from '../entity/History';

class HistoryController {
  static async addToHistory(cepObj: CEPInfo) {
    try {
      const historyRepository = getMongoRepository(History);

      const lastHistory = await historyRepository.findOneAndUpdate(
        {
          cep: cepObj.cep,
        },
        {
          $set: { searched_at: new Date() },
        },
      );

      if (lastHistory.value) return;

      console.log(lastHistory);

      const newHistory = historyRepository.create({
        cep: cepObj.cep,
        city: cepObj.city,
        uf: cepObj.uf,
        searched_at: new Date(),
      });

      return historyRepository.save(newHistory);
    } catch (err) {
      console.log(err);
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const historyRepository = getMongoRepository(History);

      const history = await historyRepository.find({
        order: {
          searched_at: 'DESC',
        },
      });

      return res.status(200).send(history);
    } catch (err) {
      if (err.name === 'CustomError') {
        return res.status(500).send({ error: err.message });
      }

      return res
        .status(500)
        .send({ error: 'Ocorreu um erro ao resgatar o histórico!' });
    }
  }
}

export default HistoryController;
