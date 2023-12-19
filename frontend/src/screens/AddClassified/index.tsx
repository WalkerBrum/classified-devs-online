import { VStack, Heading, Text, HStack, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Controller } from 'react-hook-form';

import { Header } from '@components/Header';
import { InputSelect } from '@components/InputSelect';
import { THEME } from '@theme/index';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { jobTitle, level, workingModel } from '@data/optionsToRegister';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useClassifiedForm } from '@hooks/useClassifiedForm';

export const AddClassified = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit, onSubmit, errors } = useClassifiedForm();

  const handleGoBackMyClassified = () => {
    navigate('myClassified');
  }

  return (
    <VStack flex={1}>
      <Header
        textHeader="LabsIF"
        firstButton="Meus Anúncios"
        secondButton
        navigation={handleGoBackMyClassified}
      />

      <VStack px={7} py={7} flex={1}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700" pb={6}>
          Novo anúncio
        </Heading>

        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <VStack space={2}>
            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Título da vaga</Text>
              <Controller 
                control={control}
                name="jobTitle"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputSelect
                    placeholder="Selecione o título"
                    color={THEME.colors.black}
                    options={jobTitle}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.jobTitle?.message}
                  />
                )}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Principais Tecnologias</Text>
              <Controller 
                control={control}
                name="mainSkills"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.mainSkills?.message}
                  />
                )}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Nível</Text>
              <Controller 
                control={control}
                name="level"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputSelect
                    placeholder="Selecione o título"
                    color={THEME.colors.black}
                    options={level}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.level?.message}
                  />
                )}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Descrição</Text>
              <Controller 
                control={control}
                name="description"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    height={56}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.description?.message}
                    isMultiline
                  />
                )}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Modelo de Trabalho</Text>
              <Controller 
                control={control}
                name="workingModel"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputSelect
                    placeholder="Selecione o modelo de trabalho"
                    color={THEME.colors.black}
                    options={workingModel}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.workingModel?.message}
                  />
                )}
              />
            </VStack>

            <VStack>
              <HStack space={4}>
                <VStack flex={1}>
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Cidade</Text>
                  <Controller 
                    control={control}
                    name="city"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.city?.message}
                      />
                    )}
                  />
                </VStack>

                <VStack w="70">
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>UF</Text>
                  <Controller 
                    control={control}
                    name="uf"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.uf?.message}
                      />
                    )}
                  />
                </VStack>
              </HStack>
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={2}>Remuneração</Text>
              <Controller 
                control={control}
                name="remuneration"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value} 
                    errorMessage={errors.remuneration?.message}
                    keyboardType="numeric"
                  />
                )}
              />
            </VStack>

            <VStack pt={6} pb={2}>
              <Button title="Cadastrar" onPress={handleSubmit(onSubmit)}/>
            </VStack>
          </VStack>
        </ScrollView>
        
      </VStack>
    </VStack>
  )
}