import { useNavigation } from '@react-navigation/native';
import { HStack, Heading } from 'native-base';

import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';

type HeaderProps = {
  textHeader: string;
  firstButton: string;
  secondButton?: boolean;
}

export const Header = ({ textHeader, firstButton, secondButton = false }: HeaderProps) => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoBackHome = () => {
    navigate('home')
  }
  
  return (
    <HStack 
      justifyContent="space-between"
      alignItems="center" 
      bg="gray.600" 
      pb={12} 
      pt={16}
      px={6}
    >
      <Heading
        color="gray.100" 
        fontSize="lg" 
        fontFamily="heading"
        w="150"
      >
        {textHeader}
      </Heading>

      <HStack space={2}>
        <Button 
          title={firstButton}
          variant="outline"
          height={12}
          onPress={handleGoBackHome}
        />

        {secondButton && (
          <Button 
            title="Sair"
            variant="outline"
            height={12}
            onPress={handleGoBackHome}
          />
        )}
      </HStack>
    </HStack>
  )
}