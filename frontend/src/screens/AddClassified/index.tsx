import { Header } from "@components/Header"
import { InputSelect } from "@components/InputSelect"
import { VStack, Heading, Text } from "native-base"

export const AddClassified = () => {
  return (
    <VStack>
      <Header
        textHeader="LabsIF"
        firstButton="Meus Anúncios"
        secondButton
      />

      <VStack px={7} py={7}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700">
          Novo anúncio
        </Heading>

        <VStack space={2} pt={6} px={2}>
          <VStack>
            <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Título da vaga</Text>
            <InputSelect />
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}