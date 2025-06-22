import { Image, View } from 'react-native';
import useFeatureFlag from '../src/sdk/useFeatureFlag';

export default function Hero({ source }: { source: number | { uri: string } }) {
  const width = useFeatureFlag<number>('hero-width', 320);
  const height = useFeatureFlag<number>('hero-height', 180);
  const borderRadius = useFeatureFlag<number>('hero-border-radius', 12);

  return (
    <View>
      <Image
        source={source}
        style={{ width, height, borderRadius }}
        resizeMode="contain"
      />
    </View>
  );
}
