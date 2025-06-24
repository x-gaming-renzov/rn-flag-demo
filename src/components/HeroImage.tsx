import { Image } from 'react-native';

export default function HeroImage() {


  return (
    <Image
      source={require('../../assets/hero.png')}
      //source={{ uri: `data:image/png;base64,${b64}` }}
      style={{ width: 220, height: 120, resizeMode: 'contain', marginTop: 8 }}
    />
  );
}
