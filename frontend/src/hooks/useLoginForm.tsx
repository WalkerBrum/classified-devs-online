import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { userLoginSchema } from '@schemas/userLogin';
import { AppError } from '@utils/AppError';
import { usersGetAll } from '@storage/users/usersGetALL';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { RegisterContext } from '@contexts/RegisterProvider';
import { classifiedGetAll } from '@storage/classified/classifiedGetAll';

type LoginDataForm = {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const schema =  userLoginSchema();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginDataForm>({
    resolver: yupResolver(schema)
  });
  
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { getDataUserLogin } = useContext(RegisterContext);

  const onSubmit = async (data: LoginDataForm) => {
    try {
      const usersRegister = await usersGetAll();
      const usersClassified = await classifiedGetAll();
      const user = usersRegister.find(user => user.email === data.email);

      if (user) {
        if (data.password === user.password) {
          getDataUserLogin({
            nameOrCorporateReason: user.nameOrCorporateReason,
            cpfOrCnpj: user.cpfOrCnpj,
            typeUser:user.typeUser
          });

          navigate('classified');
        } else {
          Alert.alert('Login', 'Senha incorreta!');
        }
      } else {
        Alert.alert('Login', 'E-mail não cadastrado!');
      }

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Usuário', error.message);

      } else {
        Alert.alert('Login', 'Não foi possível fazer o login');
        console.log(error);
      }
    }
  }
  
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  }
}