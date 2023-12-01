import { selectedRegisterType, useRegister } from '@hooks/useRegister';
import { ReactNode } from 'react';

type ProviderContextProps = {
  children: ReactNode
}

import { createContext } from 'react';

type RegisterContextDataProps = {
  typeRegister: 'CPF' | 'CNPJ' | undefined;
  selectedTypeRegister: (selectedRegister: selectedRegisterType) => void;
}

export const RegisterContext = createContext<RegisterContextDataProps>(
  {} as RegisterContextDataProps
);

export const RegisterProvider = ({ children }: ProviderContextProps) => {
  const { typeRegister, selectedTypeRegister } = useRegister();

  return (
    <RegisterContext.Provider value={{ typeRegister, selectedTypeRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};