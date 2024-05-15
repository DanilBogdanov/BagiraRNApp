import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ASSETS, COLORS, SIZES} from 'constants/theme';

type NotFoundProps = {
  onPress: () => void;
};

const NotFound = ({onPress}: NotFoundProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={ASSETS.sadDog} />
      <View style={styles.info}>
        <Text style={styles.title}>К сожалению, ничего не нашли😔</Text>
        <Text style={styles.text}>
          Попробуйте сократить название товара или перейдите в каталог
        </Text>
      </View>
      <Button color={COLORS.primary} title="В каталог" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    rowGap: SIZES.sm,
    marginBottom: SIZES.l,
  },
  title: {
    color: COLORS.text,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.text,
    fontSize: SIZES.h5,
  },
  img: {
    width: '100%',
    height: 250,
    objectFit: 'contain',
  },
});

export default NotFound;
