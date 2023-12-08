import { VStack, Heading, Text, HStack, ScrollView } from 'native-base';

import { Header } from '@components/Header';
import { InputSelect } from '@components/InputSelect';
import { THEME } from '@theme/index';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { jobTitle } from '../../data/optionsToRegister';
import { level } from '../../data/optionsToRegister';
import { workinModel } from '../../data/optionsToRegister';

export const AddClassified = () => {
  return (
    <VStack flex={1}>
      <Header
        textHeader="LabsIF"
        firstButton="Meus Anúncios"
        secondButton
      />

      <VStack px={7} py={7} flex={1}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700" pb={6}>
          Novo anúncio
        </Heading>

        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <VStack space={2} px={2}>
            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Título da vaga</Text>
              <InputSelect
                placeholder="Selecione o título"
                color={THEME.colors.black}
                options={jobTitle}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Principais Tecnologias</Text>
              <Input />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Nível</Text>
              <InputSelect
                placeholder="Selecione o nível"
                color={THEME.colors.black}
                options={level}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Descrição</Text>
              <Input height={56}/>
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Modelo de Trabalho</Text>
              <InputSelect
                placeholder="Selecione o modelo de trabalho"
                color={THEME.colors.black}
                options={workinModel}
              />
            </VStack>

            <VStack>
              <HStack space={4}>
                <VStack flex={1}>
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Cidade</Text>
                  <Input />
                </VStack>

                <VStack w="70">
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>UF</Text>
                  <Input />
                </VStack>
              </HStack>
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Remuneração</Text>
              <Input />
            </VStack>

            <VStack pt={6} pb={2}>
              <Button title="Cadastrar" />
            </VStack>
          </VStack>
        </ScrollView>
        
      </VStack>
    </VStack>
  )
}