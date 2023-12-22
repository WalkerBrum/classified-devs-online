export const secureRandomFallback = (size: number) => {
  const randomBytes = require('react-native-randombytes');
  return randomBytes(size);
};
