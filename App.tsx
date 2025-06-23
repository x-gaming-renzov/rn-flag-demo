import { useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform, Text } from 'react-native';
import { XGFeatureFlags } from 'xg-nova-sdk';
import Headline from './src/components/Headline';
import HeroImage from './src/components/HeroImage';

// 1️⃣  bring in the shim FIRST ─ it adds getRandomValues to global.crypto
import 'react-native-get-random-values';

// 2️⃣  now safely import uuid
import { v4 as uuid } from 'uuid';

// ①  initial-se up once – must be top-level
XGFeatureFlags.init('6854a5aab37a36094d18a5da');

export default function App() {
  /* ② register the user exactly once */
  useEffect(() => {
    console.debug('[APP] useEffect fired – calling register()');
    XGFeatureFlags.get().register({
      key: uuid(),            // unique id
      anonymous: false,
      campaign: 'diablo-2',  // ← targeting attr
      utm_source: 'google',
    }).catch(err => console.error('register failed', err));
  }, []);

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
      <StatusBar barStyle="dark-content" />
      <Headline />
      <HeroImage />
      {/* temp fallback so screen never looks blank */}
      <Text style={{marginTop:20,color:'#888'}}>If you see this, UI is mounted ✔︎</Text>
    </SafeAreaView>
  );
}
