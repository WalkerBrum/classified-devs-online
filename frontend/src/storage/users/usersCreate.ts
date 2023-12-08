import AsyncStorage from '@react-native-async-storage/async-storage';

import { USERS_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { usersStorageProps } from 'src/@types/usersStorage';

import { usersGetAll } from './usersGetALL';

export const usersCreate = async( newUser: usersStorageProps) => {
  try {
    const storageUsers = await usersGetAll();
    const userAlreadyExists = storageUsers.find(user => user.email === newUser.email)

    if (userAlreadyExists) {
      throw new AppError('Usuário já cadastrado')
    }

    const storage = JSON.stringify([...storageUsers, newUser]);

    await AsyncStorage.setItem(USERS_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}