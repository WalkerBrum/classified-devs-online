import { HStack, Heading, VStack } from 'native-base';

import { Header } from '@components/Header'
import { ButtonIcon } from '@components/ButtonIcon';
import { THEME } from '@theme/index';

export const Classified = () => {
  return (
    <VStack>
      <Header 
        textHeader="Walker Lobato"
        firstButton="Meus Anúncios"
        secondButton
      />

      <HStack justifyContent="space-between" px={7} py={7}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700">
          Listagem de anúncios
        </Heading>

        <ButtonIcon 
          icon="filter"
          color={THEME.colors.green[700]}
        />
      </HStack>
    </VStack>
  )
}