// src/components/Headline.tsx
import { Text } from 'react-native';

export default function Headline() {


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
      Make Your Game Legendary.
    </Text>
  );
}
