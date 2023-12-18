import AsyncStorage from '@react-native-async-storage/async-storage';

import { USERS_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { userStorage } from 'src/@types/userStorage';

import { usersGetAll } from './usersGetALL';

export const userCreate = async(newUser: userStorage) => {
  try {
    const storageUsers = await usersGetAll();
    const alreadyExistsEmail = storageUsers.some(user => user.email === newUser.email);

    if (alreadyExistsEmail) {
      throw new AppError('E-mail já cadastrado!')
    }

    const alreadyExistscpfOrCnpj = storageUsers.some(user => user.cpfOrCnpj === newUser.cpfOrCnpj);

    if (alreadyExistscpfOrCnpj) {
      throw new AppError('CPF ou CNPJ já cadastrado!')
    }

    const storage = JSON.stringify([...storageUsers, newUser]);

    await AsyncStorage.setItem(USERS_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}