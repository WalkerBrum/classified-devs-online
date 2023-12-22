import { useState } from 'react';

import { DataUserLoginProps } from 'src/@types/userLogin';

export const useDataLogin = () => {
  const [dataUserLogin, setDataUserLogin] = useState<DataUserLoginProps>();

  const getDataUserLogin = ({ nameOrCorporateReason, cpfOrCnpj, typeUser }: DataUserLoginProps) => {

    setDataUserLogin({
      nameOrCorporateReason,
      cpfOrCnpj,
      typeUser
    });
  }

  return {
    dataUserLogin,
    getDataUserLogin
  }
}