import supertest from 'supertest';
import { Connection, createConnection } from 'typeorm';
import server from '../services/express';
import { getCEPInfo } from '../services/viaCEP';
import { maskCEP } from '../utils/maskCEP';

describe('CEP Services', () => {
  it('should mask CEP', async () => {
    const cep = '64015300';
    const maskedCEP = '64015-300';

    expect(maskCEP(cep)).toEqual(maskedCEP);
  });

  it('should get CEP info of ViaCEP', async () => {
    const cep = '64015300';
    const maskedCEP = '64015-300';
    const cepInfo = await getCEPInfo(cep);

    expect(cepInfo).toHaveProperty('cep');
    expect(cepInfo.cep).toEqual(maskedCEP);
  });
});

describe('CEP Endpoints', () => {
  let connection: Connection | null = null;

  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(() => {
    connection?.close();
  });

  it('should get CEP info', async () => {
    const cep = '64015300';
    const maskedCEP = '64015-300';
    const res = await supertest(server).get(`/cep/${cep}`);

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('cep');
    expect(res.body.cep).toEqual(maskedCEP);
  });
});
