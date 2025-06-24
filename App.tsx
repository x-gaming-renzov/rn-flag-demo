import { useEffect } from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  Platform, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import { XGFeatureFlags } from 'xg-nova-sdk';
import Headline from './src/components/Headline';
import HeroImage from './src/components/HeroImage';

// 1️⃣  bring in the shim FIRST ─ it adds getRandomValues to global.crypto
import 'react-native-get-random-values';

// 2️⃣  now safely import uuid
import { v4 as uuid } from 'uuid';

// ①  initial-se up once – must be top-level
XGFeatureFlags.init('6854a5aab37a36094d18a5da');

const { width, height } = Dimensions.get('window');

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <View style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

interface CallToActionButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const CallToActionButton = ({ title, onPress, variant = 'primary' }: CallToActionButtonProps) => (
  <TouchableOpacity 
    style={[styles.ctaButton, variant === 'secondary' && styles.ctaButtonSecondary]} 
    onPress={onPress}
  >
    <Text style={[styles.ctaButtonText, variant === 'secondary' && styles.ctaButtonTextSecondary]}>
      {title}
    </Text>
  </TouchableOpacity>
);

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Headline />
            <HeroImage />
            <Text style={styles.heroSubtitle}>
              Experience the next level of gaming with cutting-edge features and immersive gameplay.
            </Text>
            <View style={styles.ctaContainer}>
              <CallToActionButton 
                title="Get Started" 
                onPress={() => console.log('Get Started pressed')} 
              />
              <CallToActionButton 
                title="Learn More" 
                variant="secondary"
                onPress={() => console.log('Learn More pressed')} 
              />
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.featuresGrid}>
            <FeatureCard 
              icon="🎮"
              title="Epic Gaming"
              description="Immersive gameplay experiences that will keep you engaged for hours."
            />
            <FeatureCard 
              icon="⚡"
              title="Lightning Fast"
              description="Optimized performance for seamless gaming without any lag."
            />
            <FeatureCard 
              icon="🌟"
              title="Premium Quality"
              description="High-quality graphics and audio for the ultimate gaming experience."
            />
            <FeatureCard 
              icon="🔒"
              title="Secure Platform"
              description="Your data and progress are protected with enterprise-grade security."
            />
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Join Millions of Gamers</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10M+</Text>
              <Text style={styles.statLabel}>Active Players</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>50K+</Text>
              <Text style={styles.statLabel}>5-Star Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>Support</Text>
            </View>
          </View>
        </View>

        {/* Bottom CTA Section */}
        <View style={styles.bottomCTASection}>
          <Text style={styles.bottomCTATitle}>Ready to Begin Your Journey?</Text>
          <Text style={styles.bottomCTASubtitle}>
            Join thousands of players who have already discovered the legend.
          </Text>
          <CallToActionButton 
            title="Start Playing Now" 
            onPress={() => console.log('Start Playing pressed')} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    minHeight: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1a1a2e',
  },
  heroContent: {
    alignItems: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    lineHeight: 24,
  },
  ctaContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 15,
  },
  ctaButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#667eea',
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ctaButtonTextSecondary: {
    color: '#667eea',
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#111',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  featureCard: {
    width: (width - 60) / 2,
    backgroundColor: '#1A1A1A',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#0A0A0A',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: '#667eea',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  bottomCTASection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: 'center',
    backgroundColor: '#111',
  },
  bottomCTATitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  bottomCTASubtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
});
