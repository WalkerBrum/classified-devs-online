import { Box, HStack, Heading, VStack, Text } from 'native-base';

import { ButtonIcon } from '@components/ButtonIcon';
import { moneyFormat } from '@utils/moneyFormat';

type DataProps = {
  id: string;
  cpfOrCnpj: string | undefined;
  jobTitle: string;
  mainSkills: string;
  level: string;
  description: string;
  workingModel: string;
  city:string;
  uf: string;
  remuneration: string;
}

type CardProps = {
  data: DataProps
  hasButtons?: boolean;
  handleDelete?: (id: string) => void;
  handleEdit?: () => void;
}

export const Card = ({ data, hasButtons = false, handleDelete, handleEdit }: CardProps) => {
  const { id, jobTitle, mainSkills, city, uf, remuneration, workingModel, level } = data;

  const formattedMoney = moneyFormat(parseFloat(remuneration));

  return (
    <Box 
      borderColor="gray.200" 
      borderRadius="lg" 
      borderWidth={2} 
      p={5} 
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Heading fontFamily="heading" fontSize="md" color="gray.700">{jobTitle}</Heading>

        { hasButtons && (
          <HStack space={2}>
            <ButtonIcon 
              icon="edit-2"
              color="orange"
              size={18}
              testID="editButton"
              onPress={() => handleEdit && handleEdit()}
            />

            <ButtonIcon 
              icon="trash-2"
              color="red"
              size={18}
              testID="deleteButton"
              onPress={() => handleDelete && handleDelete(id)}
            />
          </HStack>
        )}
      </HStack>

      <VStack >
        <VStack py={2}>
          <Text fontFamily="heading" fontSize="sm" color="gray.400">Principais tecnologias: {mainSkills}</Text>
        </VStack>
        
        <Text fontFamily="body" fontSize="sm" color="gray.400">Nível: {level}</Text>
        <Text fontFamily="body" fontSize="sm" color="gray.400">Remuneração: {formattedMoney}</Text>
        <Text fontFamily="body" fontSize="sm" color="gray.400">Modelo de trabalho: {workingModel}</Text>

        <HStack>
          <Text fontFamily="body" fontSize="sm" color="gray.400">Cidade: {city} - </Text>
          <Text fontFamily="body" fontSize="sm" color="gray.400">{uf}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}