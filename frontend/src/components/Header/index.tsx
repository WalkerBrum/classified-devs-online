import { useNavigation } from '@react-navigation/native';
import { HStack, Heading } from 'native-base';

import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';

type HeaderProps = {
  textHeader: string;
  firstButton: string;
  secondButton?: string;
}

export const Header = ({ textHeader, firstButton, secondButton }: HeaderProps) => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleChangePage = () => {
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

      <HStack>
        <Button 
          title={firstButton}
          variant="outline"
          height={12}
          onPress={handleChangePage}
        />

        {secondButton && (
          <Button 
            title={secondButton}
          />
        )}
      </HStack>
    </HStack>
  )
}