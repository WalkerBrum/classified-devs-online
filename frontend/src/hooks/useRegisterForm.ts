import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useForm, SubmitHandler } from 'react-hook-form'; // Import SubmitHandler

type RegisterFormDataProps = {
  nameOrCorporateReason: string;
  email: string;
  cpfOrCnpj: string;
  phone: string;
  city: string;
  uf: string;
  password: string;
  repeatPassword: string;
};

export const useRegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormDataProps>(); // Specify the form data type
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const onSubmit: SubmitHandler<RegisterFormDataProps> = (data) => { // Use SubmitHandler with the correct type
    console.log(data);
    navigate('home');
  };

  return {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
  };
};