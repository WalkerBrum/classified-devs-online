import { useState } from 'react';

export type selectedRegisterType = 'Cadastrar usuário' | 'Cadastrar anunciante';

export const useRegister = () => {
  const [typeRegister, setTypeRegister] = useState<'CPF' | 'CNPJ' | undefined>();

  const selectedTypeRegister = (selectedRegister: selectedRegisterType) => {
    if (selectedRegister === 'Cadastrar usuário') {
      setTypeRegister('CPF');
      return;
    } 

    setTypeRegister('CNPJ');
  };

  return {
    typeRegister,
    selectedTypeRegister,
  };
};

