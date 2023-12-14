import { cnpj } from 'cpf-cnpj-validator';

export const isValidCNPJ = (cnpjValue: string) => {
  return cnpj.isValid(cnpjValue);
};