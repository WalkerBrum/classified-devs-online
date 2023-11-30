import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export const Button = ({ title, variant = 'solid', ...rest }: ButtonProps) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderColor="green.500"
      rounded="lg"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500"
      }}
    >
      <Text 
        color={variant === "outline" ? "green.500" : "white"} 
        fontFamily="heading" 
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}