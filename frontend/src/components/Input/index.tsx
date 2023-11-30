import { IInputProps, Input as NativeBaseInput } from 'native-base';

type InputProps = IInputProps & {
  placeholder?: string;
}

export const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <NativeBaseInput 
      placeholder={placeholder}
      h={14}
      borderColor="gray.600"
      color="gray.600"
      placeholderTextColor="gray.300"
      fontSize="md"
      rounded="lg"
      fontFamily="body"
      {...rest}
    />
  )
}