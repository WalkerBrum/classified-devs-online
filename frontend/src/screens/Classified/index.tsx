import { HStack, Heading, VStack, SectionList, ScrollView, Box } from 'native-base';

import { Header } from '@components/Header'
import { ButtonIcon } from '@components/ButtonIcon';
import { THEME } from '@theme/index';
import { Card } from '@components/Card';
import { TitleDate } from '@components/TitleDate';

import { dataClassified } from '../../data/classified';

export const Classified = () => {
  
  return (
    <VStack flex={1}>
      <Header 
        textHeader="Walker Lobato"
        firstButton="Meus Anúncios"
        secondButton
      />

      <VStack flex={1} px={7} py={7}>
        <HStack justifyContent="space-between" pb={6}>
          <Heading fontFamily="heading" fontSize="xl" color="gray.700">
            Listagem de anúncios
          </Heading>
          <ButtonIcon
            icon="filter"
            color={THEME.colors.green[700]}
          />
        </HStack>

        <Box flex={1}>
          <SectionList
            sections={dataClassified}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card data={item} />
            )}
            renderSectionHeader={({ section: {date} }) => (
              <TitleDate date={date} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </VStack>
    </VStack>
  )
}