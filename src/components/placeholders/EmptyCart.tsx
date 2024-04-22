import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from 'constants/theme';

type EmptyCartProps = {
  onPress: () => void;
};

const EmptyCart = ({onPress}: EmptyCartProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('assets/img/emptyCart.png')} />
      <Text style={styles.title}>Ваша корзина пуста 😥</Text>
      <Button color={COLORS.primary} title="В каталог" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30,
  },
  img: {
    width: 300,
    height: 250,
    objectFit: 'contain',
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default EmptyCart;
