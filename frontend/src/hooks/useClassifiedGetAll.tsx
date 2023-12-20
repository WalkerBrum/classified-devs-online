import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { classifiedGetAll } from '@storage/classified/classifiedGetAll';
import { ClassifiedStorage } from 'src/@types/classifiedStorage';
import { AppError } from '@utils/AppError';
import { useFocusEffect } from '@react-navigation/native';

export const useClassifiedGetAll = () => {
  const [classifiedStorage, setClassifiedStorage] = useState<ClassifiedStorage[]>([]);

  useFocusEffect(useCallback(() => {
    const fetchData = async () => {
      try {
        const storage = await classifiedGetAll();
        setClassifiedStorage(storage);

      } catch (error) {
        if (error instanceof AppError) {
          Alert.alert('Error fetching data', error.message);
  
        } else {
          Alert.alert('Error fetching data', 'Não foi pegar os dados de classifiedStorage');
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []));

  return {
    classifiedStorage
  };
};