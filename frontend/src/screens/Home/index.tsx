import { Center, Text, VStack } from 'native-base';

import { Header } from './components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export const Home = () => {
  console.log('Home');
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

          <Button title="Cadastrar usuário" />
          <Button title="Cadastrar anunciante" />
        </VStack>

      </VStack>
    </VStack>
  )
}