import { Text } from 'react-native';
import useFeatureFlag from '../src/sdk/useFeatureFlag';

export default function Headline({ text }: { text: string }) {
  const color = useFeatureFlag<string>('headline-color', '#fff');
  const fontSize = useFeatureFlag<number>('headline-font-size', 32);
  const fontWeight = useFeatureFlag<string>('headline-font-weight', '700');
  const textAlign = useFeatureFlag<string>('headline-text-align', 'center');

  return (
    <Text style={{ color, fontSize, fontWeight, textAlign }}>{text}</Text>
  );
}
