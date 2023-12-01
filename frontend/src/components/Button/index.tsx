import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
  height?: number
}

export const Button = ({ title, variant = 'solid', height = 14, ...rest }: ButtonProps) => {
  return (
    <ButtonNativeBase
      h={height}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderColor="green.500"
      variant={variant}
      rounded="lg"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500"
      }}
      {...rest}
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