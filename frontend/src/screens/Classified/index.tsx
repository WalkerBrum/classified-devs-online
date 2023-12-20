import { HStack, Heading, VStack, SectionList, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Header } from '@components/Header'
import { ButtonIcon } from '@components/ButtonIcon';
import { Card } from '@components/Card';
import { TitleDate } from '@components/TitleDate';

import { dataClassified } from '@data/classified';
import { THEME } from '@theme/index';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useContext } from 'react';
import { RegisterContext } from '@contexts/RegisterProvider';
import { classifiedGetAll } from '@storage/classified/classifiedGetAll';
import { useClassifiedGetAll } from '@hooks/useClassifiedGetAll';

export const Classified = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { dataUserLogin } = useContext(RegisterContext);
  const { classifiedStorage } = useClassifiedGetAll();

  const handleMyClassified = async () => {
    navigate('myClassified');

    const storage = await classifiedGetAll();

    console.log(JSON.stringify(storage, null, 2));
  }

  const handleFilter = () => {
    Alert.alert('Filtro', 'Funcionalidade ainda não implementada.')
  }

  return (
    <VStack flex={1}>
      <Header 
        textHeader={dataUserLogin?.nameOrCorporateReason}
        textFirstButton="Meus Anúncios"
        firstButton={dataUserLogin?.typeUser === "advertiser"}
        secondButton
        navigation={handleMyClassified}
      />

      <VStack flex={1} px={7} py={7}>
        <HStack justifyContent="space-between" pb={6}>
          <Heading fontFamily="heading" fontSize="xl" color="gray.700">
            Listagem de anúncios
          </Heading>
          <ButtonIcon
            icon="filter"
            color={THEME.colors.green[700]}
            onPress={handleFilter}
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