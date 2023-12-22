import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLASSIFIED_COLLECTION } from '@storage/storageConfig';
import { ClassifiedStorage } from 'src/@types/classifiedStorage';

import { classifiedGetAll } from './classifiedGetAll';


export const classifiedCreate = async (newClassified: ClassifiedStorage) => {
  try {
    const storageClassified = await classifiedGetAll();

    const storage = JSON.stringify([...storageClassified, newClassified]);

    await AsyncStorage.setItem(CLASSIFIED_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
  
}