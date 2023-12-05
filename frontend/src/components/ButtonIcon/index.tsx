import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { THEME } from '@theme/index';

type ButtonIconProps = {
  color: keyof typeof THEME.colors | string;
  icon: "filter" | "trash-2" | "edit-2";
  size?: number
}

export const ButtonIcon = ({ color, icon, size = 24 }: ButtonIconProps) => {
  return (
    <TouchableOpacity>
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