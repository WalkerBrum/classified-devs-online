import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, VStack } from 'native-base';

import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';

type HeaderProps = {
  textHeader: string | undefined;
  textFirstButton: string;
  firstButton?: boolean;
  secondButton?: boolean;
  navigation: () => void;
}

export const Header = (
  { 
    textHeader, 
    textFirstButton, 
    firstButton = true, 
    secondButton = false, 
    navigation 
  }: HeaderProps) => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoBackHome = () => {
    navigate('home')
  }
  
  return (
    <HStack 
      justifyContent="space-between"
      alignItems="center" 
      bg="gray.600" 
      pb={8} 
      pt={12}
      px={6}
    >
      <Heading
        color="gray.100" 
        fontSize="lg" 
        fontFamily="heading"
        w="200"
      >
        {textHeader}
      </Heading>

      <VStack space={2}>
        {firstButton && (
          <Button 
            title={textFirstButton}
            variant="outline"
            height={10}
            fontSize="xs"
            onPress={navigation}
          />
        )}

        {secondButton && (
          <Button 
            title="Sair"
            variant="outline"
            height={10}
            fontSize="xs"
            onPress={handleGoBackHome}
          />
        )}
      </VStack>
    </HStack>
  )
}