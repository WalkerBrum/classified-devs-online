import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { UserRegister } from '@screens/UserRegister';
import { Classified } from '@screens/Classified';
import { AddClassified } from '@screens/AddClassified';

type AuthRoutes = {
  home: undefined;
  userRegister: undefined;
  classified: undefined;
  addClassified: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="addClassified"
        component={AddClassified}
      />
      
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="userRegister"
        component={UserRegister}
      />

      <Screen 
        name="classified"
        component={Classified}
      />

    </Navigator>
  );
}