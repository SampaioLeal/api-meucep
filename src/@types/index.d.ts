interface ViaCEPInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface CEPInfo {
  city: string;
  uf: string;
  cep: string;

  district?: string;
  publicPlace?: string;
  complement?: string;
  ddd?: string;
}
