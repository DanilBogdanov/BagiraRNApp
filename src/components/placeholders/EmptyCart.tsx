import {Button, Image, StyleSheet, Text, View} from 'react-native';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('assets/img/emptyCart.png')} />
      <Text style={styles.title}>Ваша корзина пуста 😥</Text>
      <Button color={'#4F8EF7'} title="В каталог" />
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
    color: '#444',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default EmptyCart;
