import { useDataLogin } from '@hooks/useDataLogin';
import { selectedRegisterType, useRegister } from '@hooks/useRegister';
import { ReactNode } from 'react';

type ProviderContextProps = {
  children: ReactNode
}

import { createContext } from 'react';
import { DataUserLoginProps } from 'src/@types/userLogin';

type RegisterContextDataProps = {
  typeRegister: 'CPF' | 'CNPJ' | undefined;
  selectedTypeRegister: (selectedRegister: selectedRegisterType) => void;
  dataUserLogin?: DataUserLoginProps;  
  getDataUserLogin: ({ nameOrCorporateReason, cpfOrCnpj }: DataUserLoginProps) => void;
}

export const RegisterContext = createContext<RegisterContextDataProps>(
  {} as RegisterContextDataProps
);

export const RegisterProvider = ({ children }: ProviderContextProps) => {
  const { typeRegister, selectedTypeRegister } = useRegister();
  const { dataUserLogin, getDataUserLogin } = useDataLogin();

  return (
    <RegisterContext.Provider value={{ 
      typeRegister, 
      selectedTypeRegister,
      dataUserLogin,  
      getDataUserLogin
    }}>
      {children}
    </RegisterContext.Provider>
  );
};