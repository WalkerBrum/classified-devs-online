import { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, ScrollView, Text, VStack } from 'native-base';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { RegisterContext } from '@contexts/RegisterProvider';
import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useRegisterForm } from '@hooks/useRegisterForm';

export const UserRegister = () => {
  const { typeRegister } = useContext(RegisterContext);
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()
  const { control, handleSubmit, onSubmit, formState: { errors }, } = useRegisterForm();

  const handleGoBackHome = () => {
    navigate('home');
  }
  
  return (
    <VStack flex={1}>
      <Header 
        textHeader="Pega Job, Dev!"
        firstButton="Home"
        navigation={handleGoBackHome}
      />

      <VStack px={7} py={7} flex={1}>
        <Heading fontFamily="heading" fontSize="xl" color="gray.700" pb={6}>
          Cadastro de {typeRegister === 'CPF' ? 'Usuário' : 'Anunciante'}
        </Heading>

        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <VStack space={2}>
            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>{typeRegister === "CPF" ? "Nome" : "Razão social"}</Text>
              <Controller 
                control={control}
                name="nameOrCorporateReason"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.nameOrCorporateReason?.message}
                  />
                )}
              />
            </VStack>

            <VStack >
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>E-mail</Text>
              <Controller 
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </VStack>

            <VStack>
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>{typeRegister}</Text>
              <Controller 
                control={control}
                name="cpfOrCnpj"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.cpfOrCnpj?.message}
                    keyboardType="numeric"
                  />
                )}
              />
            </VStack>

            <VStack >
              <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Telefone</Text>
              <Controller 
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.phone?.message}
                    keyboardType="numeric"
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
              <HStack space={4}>
                <VStack flex={1}>
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Senha</Text>
                  <Controller 
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        isPassword
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.password?.message}
                      />
                    )}
                  />
                </VStack>

                <VStack flex={1}>
                  <Text fontFamily="body" fontSize="sm" color="gray.500" py={1}>Repetir senha</Text>
                  <Controller 
                    control={control}
                    name="repeatPassword"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        isPassword
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.repeatPassword?.message}
                      />
                    )}
                  />
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <VStack pt={6} pb={2}>
            <Button title="Cadastrar" onPress={handleSubmit(onSubmit)}/>
          </VStack>
        </ScrollView>

      </VStack>
    </VStack>
  )
}