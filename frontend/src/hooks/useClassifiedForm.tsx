import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

import { userClassifiedSchema } from '@schemas/userClassified';
import { AppError } from '@utils/AppError';
import { classifiedCreate } from '@storage/classified/classifiedCreate';
import { RegisterContext } from '@contexts/RegisterProvider';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';

export type ClassifiedDataForm = {
  jobTitle: string;
  mainSkills: string;
  level: string;
  description: string;
  workingModel: string;
  city:string;
  uf: string;
  remuneration: string;
}

export const useClassifiedForm = () => {
  const schema = userClassifiedSchema();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { dataUserLogin } = useContext(RegisterContext);
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const onSubmit = async (data: ClassifiedDataForm) => {
    try {
      const currentDate = new Date();

      const dataStorage = {
        date_created: currentDate.toLocaleDateString('pt-BR'),
        data: {
          id: uuidv4(),
          cpfOrCnpj: dataUserLogin?.cpfOrCnpj,
          ...data,
          date_modificated: null
        }
      }

      await classifiedCreate(dataStorage);

      navigate('myClassified');

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Anúncio', error.message);

      } else {
        Alert.alert('Anúncio', 'Não foi possível criar o anúncio.');
        console.log(error);
      }
    }
  }

  return {
    control,
    handleSubmit,
    errors,
    onSubmit
  }
}