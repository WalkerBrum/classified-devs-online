import { cpf } from 'cpf-cnpj-validator';

export const isValidCPF = (cpfValue: string) => {
  return cpf.isValid(cpfValue);
};