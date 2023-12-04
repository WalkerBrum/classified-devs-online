import { Button, IButtonProps } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { THEME } from '@theme/index';

type ButtonIconProps = {
  color: keyof typeof THEME.colors | string;
  icon: "filter" | "trash" | "edit"
}

export const ButtonIcon = ({ color, icon }: ButtonIconProps) => {
  return (
    <TouchableOpacity>
      <Feather 
        name={icon} 
        size={24} 
        color={color} 
        _press={{
          color: color
        }}
      />
    </TouchableOpacity>
  )
}