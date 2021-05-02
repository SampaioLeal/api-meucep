export function maskCEP(cep: string) {
  return `${cep.substr(0, 5)}-${cep.substr(5, 9)}`;
}
