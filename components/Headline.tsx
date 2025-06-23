import { Text } from 'react-native';
import useFeatureFlag from '../src/sdk/useFeatureFlag';

export default function Headline({ text }: { text?: string }) {
  const heading = useFeatureFlag<string>(
    'expo-headline',
    text || 'Make Your Game Legendary.'
  );
  const color = useFeatureFlag<string>('headline-color', '#fff');
  const fontSize = useFeatureFlag<number>('headline-font-size', 32);
  const fontWeight = useFeatureFlag<string>('headline-font-weight', '700');
  const textAlign = useFeatureFlag<string>('headline-text-align', 'center');

  console.log('Headline', heading);

  return (
    <Text
      style={{
        color,
        fontSize,
        fontWeight: fontWeight as any,
        textAlign: textAlign as any,
        margin: 20,
      }}
    >
      {heading}
    </Text>
  );
}