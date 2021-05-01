import axios from 'axios';

const apiViaCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default apiViaCEP;
