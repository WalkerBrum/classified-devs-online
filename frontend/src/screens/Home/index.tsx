import { useContext, useEffect } from 'react';
import { Text, VStack } from 'native-base';

import { Header } from './components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { RegisterContext } from '@contexts/RegisterProvider';

export const Home = () => {
  const { selectedTypeRegister } = useContext(RegisterContext);

  return (
    <VStack>
      <Header title="Dev Acha Job" />

      <VStack px={7} pt={10}>
        
        <VStack space={4}>
          <Text fontFamily="heading" fontSize="lg">Faça seu login</Text>

          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />

          <Button title="Acessar" />
        </VStack>

        <VStack space={4} pt={10}>
          <Text fontFamily="heading" fontSize="lg">Crie uma conta</Text>

          <Button 
            title="Cadastrar usuário"
            onPress={() => selectedTypeRegister("Cadastrar usuário")}  
          />

          <Button 
            title="Cadastrar anunciante"
            onPress={() => selectedTypeRegister("Cadastrar anunciante")}  
          />
        </VStack>

      </VStack>
    </VStack>
  )
}