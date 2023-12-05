import { ButtonIcon } from "@components/ButtonIcon";
import { Box, HStack, Heading, VStack, Text } from "native-base";

type CardProps = {
  // data: {
  //   title: string;
  //   mainStacks: string;
  //   category: string;
  //   cidade: string;
  //   uf: string;
  //   remuneration: number;
  //   workingModel: string
  // }
  hasButtons?: boolean; 
}

export const Card = ({ hasButtons = false }: CardProps) => {
  return (
    <Box 
      borderColor="gray.200" 
      borderRadius="lg" 
      borderWidth={2} 
      p={5} 
      mx={7}
      my={3}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Heading fontFamily="heading" fontSize="md" color="gray.700">Desenvolvedor Full Stack</Heading>

        { hasButtons && (
          <HStack space={2}>
            <ButtonIcon 
              icon="edit-2"
              color="orange"
              size={18}
            />

            <ButtonIcon 
              icon="trash-2"
              color="red"
              size={18}
            />
          </HStack>
        )}
      </HStack>

      <VStack >
        <VStack py={2}>
          <Text fontFamily="heading" fontSize="sm" color="gray.400">Principais tecnologias: Typescript, React e React Native</Text>
        </VStack>

        <Text fontFamily="body" fontSize="sm" color="gray.400">Remuneração: R$ 3.500,00</Text>
        <Text fontFamily="body" fontSize="sm" color="gray.400">Modelo de trabalho: Presencial</Text>

        <HStack>
          <Text fontFamily="body" fontSize="sm" color="gray.400">Cidade: Belo Horizonte - </Text>
          <Text fontFamily="body" fontSize="sm" color="gray.400">MG</Text>
        </HStack>
      </VStack>
    </Box>
  )
}