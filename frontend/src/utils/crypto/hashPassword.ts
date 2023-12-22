import bcrypt from 'react-native-bcrypt';

import { secureRandomFallback } from '@utils/crypto/secureRandomFallback';

bcrypt.setRandomFallback(secureRandomFallback);

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const saltRounds = 10;

    const salt = await new Promise<string>((resolve, reject) => {
      bcrypt.genSalt(saltRounds, (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result) {
            resolve(result);
          } else {
            reject(new Error('Failed to generate salt.'));
          }
        }
      });
    });

    if (!salt) {
      throw new Error('Salt is undefined.');
    }

    const hashedPassword = await new Promise<string>((resolve, reject) => {
      bcrypt.hash(password, salt as string, (error, hash) => {
        if (error) {
          reject(error);
        } else {
          if (hash) {
            resolve(hash);
          } else {
            reject(new Error('Failed to generate hash.'));
          }
        }
      });
    });

    return hashedPassword;

  } catch (error) {
    console.error('Erro ao criar hash da senha:', error);
    throw error;
  }
};



