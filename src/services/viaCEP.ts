import axios from 'axios';

const apiViaCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default apiViaCEP;

export async function getCEPInfo(cep: string) {
  const response = await apiViaCEP.get<ViaCEPInfo>(cep + '/json');

  return response.data;
}
