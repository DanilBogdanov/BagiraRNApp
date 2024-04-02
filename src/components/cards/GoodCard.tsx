import {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoodData} from 'types/good';

const BASE_URL = 'https://danildev.net/';

type GoodCardProps = {
  goodData: GoodData;
  cartCount?: number;
  addToCart: (id: number) => void;
  increaseInCart: (id: number) => void;
  decreaseInCart: (id: number) => void;
};

const GoodCard = ({
  goodData,
  cartCount,
  addToCart,
  increaseInCart,
  decreaseInCart,
}: GoodCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: BASE_URL + goodData.imgUrl}}
        height={130}
        width={130}
      />
      <Text numberOfLines={5} style={styles.title}>
        {goodData.name}
      </Text>
      <Text style={styles.price}>{goodData.price}₽</Text>
      {cartCount ? (
        <View style={styles.cartArea}>
          <Pressable
            style={styles.countButton}
            onPress={() => decreaseInCart(goodData.id)}>
            <Ionicons color={'#fff'} size={30} name={'remove'} />
          </Pressable>
          <Text style={styles.cartCount}>{cartCount}</Text>
          <Pressable
            style={styles.countButton}
            onPress={() => increaseInCart(goodData.id)}>
            <Ionicons color={'#fff'} size={30} name={'add'} />
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={styles.buyButton}
          onPress={() => addToCart(goodData.id)}>
          <Text style={styles.buyButtonTitle}>В КОРЗИНУ</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    rowGap: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  image: {
    objectFit: 'contain',
  },
  title: {
    color: 'gray',
    fontSize: 12,
  },
  price: {
    color: 'rgb(99, 140, 71)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartCount: {
    color: 'gray',
    fontSize: 16,
  },
  countButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#4F8EF7',
  },
  buyButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#4F8EF7',
  },
  buyButtonTitle: {
    color: 'white',
  },
});

export default memo(GoodCard);
