import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLASSIFIED_COLLECTION } from '@storage/storageConfig';
import { ClassifiedStorage } from 'src/@types/classifiedStorage';

export const classifiedGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(CLASSIFIED_COLLECTION);
    const classified: ClassifiedStorage[] = storage ? JSON.parse(storage) : [];
  
    return classified;

  } catch (error) {
    throw error;
  } 
}