import { useForm } from 'react-hook-form';

type LoginDataForm = {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginDataForm>();

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