// src/components/Headline.tsx
import { Text } from 'react-native';
import { useFeatureFlag } from 'xg-nova-sdk'

export default function Headline() {
  const heading = useFeatureFlag<string>(
    'expo-headline',
    'Make Your Game Legendary.'
  );

  console.log('Headline', heading);

  return (
    <Text
      style={{
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        margin: 20,
        color: '#fff',          // 👈 add this line
      }}
    >
      {heading}
    </Text>
  );
}
