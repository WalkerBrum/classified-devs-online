import { IInputProps, Input as NativeBaseInput } from 'native-base';

type InputProps = IInputProps & {
  placeholder?: string;
  height?: number
}

export const Input = ({ placeholder, height = 14, ...rest }: InputProps) => {
  return (
    <NativeBaseInput 
      placeholder={placeholder}
      h={height}
      borderColor="gray.600"
      color="gray.600"
      placeholderTextColor="gray.300"
      fontSize="sm"
      rounded="lg"
      fontFamily="body"
      {...rest}
    />
  )
}