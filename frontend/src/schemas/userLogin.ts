import * as yup from 'yup';

export const userLoginSchema = () => {
  return yup.object({
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    password: yup.string().required('Digite uma senha.'), 
  });
};