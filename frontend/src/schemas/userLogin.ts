import { usersGetAll } from '@storage/users/usersGetALL';
import * as yup from 'yup';

const fetchUserData = async () => {
  return await usersGetAll();
};

export const userLoginSchema = () => {
  const usersRegister = fetchUserData();

  return yup.object({
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    password: yup.string().required('Digite uma senha.')
  });
};