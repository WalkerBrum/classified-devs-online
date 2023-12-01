import { HStack, Heading, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { Header } from '@components/Header'

export const Classified = () => {
  return (
    <VStack>
      <Header 
        textHeader="Walker Lobato"
        firstButton="Meus Anúncios"
        secondButton
      />

      <HStack justifyContent="space-between">
        <Heading fontFamily="heading" fontSize="xl" color="gray.700">
          Listagem de 
        </Heading>

        <Feather name="filter" size={24} color="black" />
      </HStack>
    </VStack>
  )
}