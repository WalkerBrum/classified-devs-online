import { useState } from 'react';

const [typeRegister, setTypeRegister] = useState<'CPF' | 'CNPJ'>('CPF');

const selectedTypeRegister = ( typeRegister: 'CPF' | 'CNPJ' ) => {
  setTypeRegister(typeRegister)
}

export const useRegister = () => {
  return ({
    typeRegister,
    selectedTypeRegister
  })
}