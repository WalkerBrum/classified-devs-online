import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { THEME } from '@theme/index';

type ButtonIconProps = TouchableOpacityProps & {
  color: keyof typeof THEME.colors | string;
  icon: "filter" | "trash-2" | "edit-2";
  size?: number
}

export const ButtonIcon = ({ color, icon, size = 24, ...rest }: ButtonIconProps) => {
  return (
    <TouchableOpacity {...rest} >
      <Feather 
        name={icon} 
        size={size} 
        color={color} 
        _press={{
          color: color
        }}
      />
    </TouchableOpacity>
  )
}