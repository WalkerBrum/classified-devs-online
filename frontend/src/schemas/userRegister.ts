import * as yup from 'yup';

import { isValidCPF } from '@utils/validateCpf';
import { isValidCNPJ } from '@utils/validateCnpj';

export const userRegisterSchema = (typeRegister: 'CPF' | 'CNPJ' | undefined) => {
  return yup.object({
    nameOrCorporateReason: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    cpfOrCnpj: yup.string().required(`Informe o ${typeRegister}.`).test('valid-cpf-cnpj', `${typeRegister} inválido`, (value) => {
      if (typeRegister === 'CPF') {
        return isValidCPF(value);
      }
      return isValidCNPJ(value);
    }),
    phone: yup.string().min(8, 'O telefone deve ter pelo menos 8 dígitos.').required('Informe o número de telefone.'),
    city: yup.string().min(3, 'Uma cidade deve ter pelo menos 3 caracteres.').required('Informe o nome da cidade.'),
    uf: yup.string().length(2, 'O UF de uma cidade deve ter 2 caracteres').required('Informe o UF'),
    password: yup.string().min(8, 'A senha deve ter pelo menos 8 dígitos.').required('Digite uma senha.'),
    repeatPassword: yup.string().min(8, 'A senha deve ter pelo menos 8 dígitos.').required('Confirme a senha.').oneOf([yup.ref('password')], 'As senhas informadas precisam ser iguais.'),
  });
};