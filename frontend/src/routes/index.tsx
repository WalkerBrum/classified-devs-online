import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { View } from 'react-native';

export const Routes = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}