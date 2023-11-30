import { useRegister } from '@hooks/useRegister';
import { ReactNode } from 'react';

type ProviderContextProps = {
  children: ReactNode
}

import { createContext } from 'react';

type RegisterContextDataProps = {
  typeRegister: 'CPF' | 'CNPJ'
  selectedTypeRegister: (typeRegister: 'CPF' | 'CNPJ') => void
}

export const RegisterContext = createContext<RegisterContextDataProps>(
  {} as RegisterContextDataProps
);

export const ProviderContext = ({ children }: ProviderContextProps) => {
  const { typeRegister, selectedTypeRegister } = useRegister();

  return (
    <RegisterContext.Provider value={{ typeRegister, selectedTypeRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};