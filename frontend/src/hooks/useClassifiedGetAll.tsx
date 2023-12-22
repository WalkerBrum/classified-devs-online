import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { classifiedGetAll } from '@storage/classified/classifiedGetAll';
import { AppError } from '@utils/AppError';
import { useFocusEffect } from '@react-navigation/native';

import { ClassifiedStorage } from 'src/@types/classifiedStorage';

export const useClassifiedGetAll = () => {
  const [classifiedStorage, setClassifiedStorage] = useState<ClassifiedStorage[]>([]);

  const fetchDataClassified = useCallback(async () => {
    try {
      const storage = await classifiedGetAll();
      setClassifiedStorage(storage);

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Error fetching data', error.message);
        
      } else {
        Alert.alert('Error fetching data', 'Não foi possível pegar os dados de classifiedStorage');
        console.error('Error fetching data:', error);
      }
    }
  }, []);

  useFocusEffect(() => {
    const asyncEffect = async () => {
      await fetchDataClassified();
    };

    asyncEffect();
  });

  return {
    classifiedStorage,
    fetchDataClassified
  };
};