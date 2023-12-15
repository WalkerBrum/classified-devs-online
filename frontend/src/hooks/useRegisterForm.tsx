import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-native';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { userRegisterSchema } from '../schemas/userRegister';
import { RegisterContext } from '@contexts/RegisterProvider';
import { userCreate } from '@storage/users/userCreate';
import { AppError } from '@utils/AppError';

type RegisterFormDataProps = {
  nameOrCorporateReason: string;
  email: string;
  cpfOrCnpj: string;
  phone: string;
  city: string;
  uf: string;
  password: string;
  repeatPassword: string;
}

export const useRegisterForm = () => {
  const { typeRegister } = useContext(RegisterContext);
  const schema = userRegisterSchema(typeRegister);

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormDataProps>({
    resolver: yupResolver(schema)
  });

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const onSubmit = async (data: RegisterFormDataProps) => {
    try {
      const date_created = new Date();
      const dataWithDate = { ...data, date_created }; 

      await userCreate(dataWithDate);

      navigate('home')

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Usuário', error.message);

      } else {
        Alert.alert('Usuário', 'Não foi possível criar o novo usuário');
        console.log(error);
      }
    }
  }

  return {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit
  }
}