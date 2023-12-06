import { SectionList } from 'react-native';
import { HStack, Heading, VStack } from 'native-base';

import { Header } from '@components/Header'
import { ButtonIcon } from '@components/ButtonIcon';
import { THEME } from '@theme/index';
import { Card } from '@components/Card';

import { dataClassified } from '../../data/classified';
import { TitleDate } from '@components/TitleDate';

export const Classified = () => {
  return (
    <VStack>
      <Header 
        textHeader="Walker Lobato"
        firstButton="Meus Anúncios"
        secondButton
      />

      <VStack px={7} py={7}>
        <HStack justifyContent="space-between">
          <Heading fontFamily="heading" fontSize="xl" color="gray.700">
            Listagem de anúncios
          </Heading>
          <ButtonIcon
            icon="filter"
            color={THEME.colors.green[700]}
          />
        </HStack>
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
      </VStack>
      
    </VStack>
  )
}