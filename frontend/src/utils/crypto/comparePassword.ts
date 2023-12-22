import bcrypt from 'react-native-bcrypt';

import { secureRandomFallback } from '@utils/crypto/secureRandomFallback';

bcrypt.setRandomFallback(secureRandomFallback);

export const comparePassword = (data: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(data, hash, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};