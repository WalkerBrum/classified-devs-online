import { useContext } from 'react';
import { Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Controller } from 'react-hook-form';

import { Header } from './components/Header';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { RegisterContext } from '@contexts/RegisterProvider';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { useLoginForm } from '@hooks/useLoginForm';

export const Home = () => {
  const { control, handleSubmit, onSubmit, errors } = useLoginForm();
  const { selectedTypeRegister } = useContext(RegisterContext);
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleUserRegister = async () => {
    selectedTypeRegister('Cadastrar usuário');

    navigate('userRegister');
  }

  const handleAdvertiserRegister = () => {
    selectedTypeRegister('Cadastrar anunciante');

    navigate('userRegister');
  }

  return (
    <VStack>
      <Header title="Pega Job, Dev!" />

      <VStack px={6} pt={10}>
        
        <VStack space={4}>
          <Text fontFamily="heading" fontSize="md" color="gray.700">Faça seu login</Text>

          <Controller 
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                isPassword
                placeholder="Senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Acessar" onPress={handleSubmit(onSubmit)}/>
        </VStack>

        <VStack space={4} pt={10}>
          <Text fontFamily="heading" fontSize="md" color="gray.700">Crie uma conta</Text>

          <Button 
            title="Cadastrar usuário"
            onPress={handleUserRegister}  
          />

          <Button 
            title="Cadastrar anunciante"
            onPress={handleAdvertiserRegister}  
          />
        </VStack>

      </VStack>
    </VStack>
  )
}