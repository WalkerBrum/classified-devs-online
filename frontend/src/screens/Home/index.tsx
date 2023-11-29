import { Loading } from '@components/Loading';
import { Center, Text } from 'native-base';

export const Home = () => {
  console.log('Home');
  return (
    <Center flex={1}>
      <Text color="gray.700" fontSize="lg">Home</Text>
    </Center>
  )
}