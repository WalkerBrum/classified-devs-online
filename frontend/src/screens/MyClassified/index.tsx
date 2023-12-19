import { VStack, Box, Heading, HStack, SectionList} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { TitleDate } from '@components/TitleDate';
import { Button } from '@components/Button';

import { dataClassified } from '@data/classified';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';

export const MyClassified = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleNewClassified = async () => {
    navigate('addClassified');
  }

  const handleGoBackAllClassified = () => {
    navigate('classified');
  }

  return (
    <VStack flex={1}>
      <Header
        textHeader="LabsIF"
        textFirstButton="Todos Anúncios"
        secondButton
        navigation={handleGoBackAllClassified}
      />

      <VStack flex={1} px={7} py={7}>
        <HStack justifyContent="space-between" pb={6} alignItems="center">
          <Heading fontFamily="heading" fontSize="xl" color="gray.700">
            Meus anúncios
          </Heading>
          <Button 
            title="Novo anúncio"
            height={12}
            onPress={handleNewClassified}
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