import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { v4 as uuid } from 'uuid';
import XGFeatureFlags from './src/sdk/XGFeatureFlags';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'

// Initialize with your environment ID
XGFeatureFlags.init('6854a5aab37a36094d18a5da');

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.debug('[APP] useEffect fired – calling register()');
    XGFeatureFlags.get().register({
      key: uuid(),            // dynamic unique id
      anonymous: false,
      campaign: 'diablo-2',  // ← targeting attr
      utm_source: 'google',
      platform: Platform.OS, // add platform detection
    }).catch((err: any) => console.error('register failed', err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
