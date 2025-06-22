import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { v4 as uuid } from 'uuid';
import XGFeatureFlags from './src/sdk/XGFeatureFlags';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

XGFeatureFlags.init('<ENV_ID_FROM_DASHBOARD>');

export default function App() {
  useEffect(() => {
    XGFeatureFlags.get().register({
      key: uuid(),
      anonymous: true,
      campaign: 'default',
      platform: Platform.OS,
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
