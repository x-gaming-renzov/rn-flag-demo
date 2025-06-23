import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import { XGFeatureFlags } from 'xg-nova-sdk';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

// Initialize with your environment ID
XGFeatureFlags.init('6854a5aab37a36094d18a5da');

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.debug('[APP] useEffect fired – calling register()');
    XGFeatureFlags.get().register({
      key: 'saef12da-1234-1234-1234-123412341234',            // unique id
      anonymous: false,
      campaign: 'diablo-2',  // ← targeting attr
      utm_source: 'google',
    }).catch(err => console.error('register failed', err));
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
