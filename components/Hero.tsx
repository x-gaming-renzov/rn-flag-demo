import { Image, StyleSheet, View } from 'react-native';

export default function Hero({ source }: { source: number }) {
  return (
    <View>
      <Image source={source} style={styles.img} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  img: { width: 320, height: 180, borderRadius: 12 },
});
