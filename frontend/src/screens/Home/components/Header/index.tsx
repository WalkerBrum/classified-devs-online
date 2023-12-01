import { Center, Heading } from 'native-base';

type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Center bg="gray.600" pb={16} pt={20}>
      <Heading 
        color="gray.100" 
        fontSize="xl" 
        fontFamily="heading"
      >
        {title}
      </Heading>
    </Center>
  )
}