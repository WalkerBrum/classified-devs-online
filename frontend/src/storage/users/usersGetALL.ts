import AsyncStorage from '@react-native-async-storage/async-storage';

import { USERS_COLLECTION } from '@storage/storageConfig';
import { userStorage } from 'src/@types/userStorage';

export const usersGetAll = async() => {
  try {
    const storage = await AsyncStorage.getItem(USERS_COLLECTION);
    const users: userStorage[] = storage ? JSON.parse(storage) : [];

    return users;

  } catch (error) {
    throw error;
  }
}