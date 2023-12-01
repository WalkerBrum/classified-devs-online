import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { UserRegister } from '@screens/UserRegister';

type AuthRoutes = {
  home: undefined;
  userRegister: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="userRegister"
        component={UserRegister}
      />
    </Navigator>
  );
}