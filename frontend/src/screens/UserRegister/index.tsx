import { useContext } from 'react';
import { RegisterContext } from '@contexts/RegisterProvider';
import { HStack, Heading, ScrollView, Text, VStack } from 'native-base';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export const UserRegister = () => {
  const { typeRegister } = useContext(RegisterContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header 
        textHeader="Pega Job, Dev!"
        firstButton="Home"
      />

      <VStack px={7} py={7}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700">
          Cadastro de {typeRegister === 'CPF' ? 'Usuário' : 'Anunciante'}
        </Heading>

        <VStack space={2} pt={6} px={2}>
          <VStack >
            <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>Nome</Text>
            <Input />
          </VStack>

          <VStack >
            <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>E-mail</Text>
            <Input />
          </VStack>

          <VStack >
            <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>{typeRegister ? typeRegister : 'CNPJ'}</Text>
            <Input />
          </VStack>

          <VStack >
            <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>Telefone</Text>
            <Input />
          </VStack>

          <VStack>
            <HStack space={4}>
              <VStack flex={1}>
                <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>Cidade</Text>
                <Input />
              </VStack>

              <VStack w="70">
                <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>UF</Text>
                <Input />
              </VStack>
            </HStack>
          </VStack>

          <VStack>
            <HStack space={4}>
              <VStack flex={1}>
                <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>Senha</Text>
                <Input />
              </VStack>

              <VStack flex={1}>
                <Text fontFamily="body" fontSize="md" color="gray.500" py={1}>Repetir senha</Text>
                <Input />
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <VStack pt={6} pb={2}>
          <Button title="Cadastrar" />
        </VStack>

      </VStack>
    </ScrollView>
  )
}