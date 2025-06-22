import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Headline from '../components/Headline';
import Hero from '../components/Hero';
import { fetchWelcomeCopy } from '../services/api';

export default function Home() {
  const [copy, setCopy] = useState<string | null>(null);

  useEffect(() => {
    fetchWelcomeCopy().then(setCopy);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {copy ? <Headline text={copy} /> : <ActivityIndicator />}
        <Hero source={require('../assets/hero-placeholder.jpg')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  content: { alignItems: 'center', justifyContent: 'center', gap: 24, padding: 32 },
});
