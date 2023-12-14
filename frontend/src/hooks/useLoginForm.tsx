import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { userLoginSchema } from '@schemas/userLogin';

type LoginDataForm = {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const schema = userLoginSchema();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginDataForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: LoginDataForm) => {
    console.log(data);
  }
  
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  }
}