import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Headline from '../components/Headline';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Headline />
        <Hero source={require('../assets/hero-placeholder.png')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  content: { alignItems: 'center', justifyContent: 'center', gap: 24, padding: 32 },
});
