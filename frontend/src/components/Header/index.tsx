import { Button } from '@components/Button';
import { HStack, Heading } from 'native-base';

type HeaderProps = {
  textHeader: string;
  firstButton: string;
  secondButton?: string;
}

export const Header = ({ textHeader, firstButton, secondButton }: HeaderProps) => {
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