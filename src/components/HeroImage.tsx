import { Image } from 'react-native';
import { useFeatureFlag } from 'xg-nova-sdk'

export default function HeroImage() {
  // fallback is the SAME PNG, pre-encoded offline
  //const b64 = useFeatureFlag<string>(
  //  'hero-image-b64',
  //  'iVBORw0KGgoAAAANSUhEUgAABVY...'   // trimmed for brevity
  //);

  return (
    <Image
      source={require('../../assets/hero.png')}
      style={{ width: 220, height: 120, resizeMode: 'contain', marginTop: 8 }}
    />
  );
}
