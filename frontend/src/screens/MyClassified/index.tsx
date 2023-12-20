import { useContext } from 'react';
import { VStack, Box, Heading, HStack, SectionList} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { TitleDate } from '@components/TitleDate';
import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useClassifiedGetAll } from '@hooks/useClassifiedGetAll';
import { RegisterContext } from '@contexts/RegisterProvider';
import { filterClassifiedStorage } from '@utils/filterMyClassifiedStorage';
import { classifiedDeleteById } from '@storage/classified/classifiedDeleteById';
import { AppError } from '@utils/AppError';
import { classifiedGetAll } from '@storage/classified/classifiedGetAll';


export const MyClassified = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { classifiedStorage, fetchDataClassified } = useClassifiedGetAll();
  const { dataUserLogin } = useContext(RegisterContext)

  const MyClassifiedStorage = filterClassifiedStorage(classifiedStorage, dataUserLogin?.cpfOrCnpj);

  const handleDeleteClassified = async (id: string) => {
    try {
      await classifiedDeleteById(id);
      
      await fetchDataClassified();
      
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Deletar anúncio', error.message);

      } else {
        Alert.alert('Deletar anúncio', 'Não foi possível deletar o anúncio.');
        console.log(error);
      }
    }
  }

  const handleNewClassified = async () => {
    navigate('addClassified');
  }

  const handleGoBackAllClassified = () => {
    navigate('classified');
  }

  return (
    <VStack flex={1}>
      <Header
        textHeader={dataUserLogin?.nameOrCorporateReason}
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
            sections={MyClassifiedStorage}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card 
                data={item} 
                handleDelete={() => handleDeleteClassified(item.id)}
                hasButtons
              />
            )}
            renderSectionHeader={({ section: { date_created } }) => (
              <TitleDate date={date_created} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </VStack>
    </VStack>
  )
}