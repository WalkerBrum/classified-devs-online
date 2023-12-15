import { IInputProps, Input as NativeBaseInput, FormControl } from 'native-base';

type InputProps = IInputProps & {
  placeholder?: string;
  height?: number;
  errorMessage?: string | null;
  isPassword?: boolean;
}

export const Input = (
  {
    placeholder, 
    height = 14, 
    errorMessage = null, 
    isPassword,  
    isInvalid, 
    ...rest 
  }: InputProps) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        placeholder={placeholder}
        h={height}
        secureTextEntry={isPassword}
        borderColor="gray.600"
        color="gray.600"
        placeholderTextColor="gray.300"
        fontSize="sm"
        rounded="lg"
        fontFamily="body"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500'
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}