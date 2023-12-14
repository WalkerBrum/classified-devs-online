import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userRegisterSchema } from '../schemas/userRegister';
import { RegisterContext } from '@contexts/RegisterProvider';
import { useContext } from 'react';

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

  const onSubmit = (data: RegisterFormDataProps) => {
    console.log(data);

    navigate('home')
  }

  return {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit
  }
}