import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLASSIFIED_COLLECTION } from '@storage/storageConfig';

import { classifiedGetAll } from './classifiedGetAll';

export const classifiedDeleteById = async (id: string) => {
  try {
    const classifiedStorage = await classifiedGetAll();
    const storageWithoutClassifiedDelete = classifiedStorage.filter((classified) => classified.data.some((classifiedData) => classifiedData.id !== id));

    const storage = JSON.stringify(storageWithoutClassifiedDelete);

    await AsyncStorage.setItem(CLASSIFIED_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}