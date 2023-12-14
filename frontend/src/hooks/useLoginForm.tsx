import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { userLoginSchema } from '@schemas/userLogin';
import { AppError } from '@utils/AppError';
import { usersGetAll } from '@storage/users/usersGetALL';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';

type LoginDataForm = {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const schema = userLoginSchema();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginDataForm>({
    resolver: yupResolver(schema)
  });
  
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const onSubmit = async (data: LoginDataForm) => {
    try {
      const usersRegister = await usersGetAll();

      usersRegister.map(user => {
        if (data.email === user.email) {
          if (data.password === user.password) {
            return navigate('classified')
          } else {
            Alert.alert('Login', 'E-mail ou senha incorretos!')
          }
        } 
      });

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