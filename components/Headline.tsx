import { Text } from 'react-native';

export default function Headline({ text }: { text: string }) {
  return (
    <Text
      style={{
        color: '#fff',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
      }}>
      {text}
    </Text>
  );
}
