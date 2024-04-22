import {memo} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoodData} from 'types/good';
import {COLORS} from 'constants/theme';

const BASE_URL = 'https://danildev.net/';

type CartGoodCardProps = {
  goodData: GoodData;
  cartCount: number;
  removeFromCart: (id: number) => void;
  increaseInCart: (id: number) => void;
  decreaseInCart: (id: number) => void;
};

const CartGoodCard = ({
  goodData,
  cartCount,
  removeFromCart,
  increaseInCart,
  decreaseInCart,
}: CartGoodCardProps) => {
  const onRemoveFromCart = () => {
    Alert.alert(
      'Удалить из корзины?',
      `${goodData.name}`,
      [
        {text: 'Удалить', onPress: () => removeFromCart(goodData.id)},
        {text: 'Отмена'},
      ],
      {
        cancelable: true,
      },
    );
  };

  const onDecreaseInCart = () => {
    if (cartCount === 1) {
      onRemoveFromCart();
    } else {
      decreaseInCart(goodData.id);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: BASE_URL + goodData.imgUrl}}
          height={100}
          width={100}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{goodData.name}</Text>
          <View style={styles.priceArea}>
            <Text style={styles.price}>{goodData.price}₽</Text>
            <Text style={styles.priceCount}>
              {goodData.price * (cartCount ?? 0)}₽
            </Text>
          </View>
          <View style={styles.actions}>
            <View style={styles.cartArea}>
              <Pressable style={styles.countButton} onPress={onDecreaseInCart}>
                <Ionicons color={COLORS.white} size={30} name={'remove'} />
              </Pressable>
              <Text style={styles.cartCount}>{cartCount}</Text>
              <Pressable
                style={styles.countButton}
                onPress={() => increaseInCart(goodData.id)}>
                <Ionicons color={COLORS.white} size={30} name={'add'} />
              </Pressable>
            </View>
            <Pressable onPress={onRemoveFromCart}>
              <Ionicons color={COLORS.secondary} size={30} name={'trash'} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 20,
    elevation: 1,
  },
  content: {
    flex: 1,
    rowGap: 20,
  },
  image: {
    objectFit: 'contain',
  },
  title: {
    fontSize: 14,
    color: COLORS.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartCount: {
    minWidth: 40,
    textAlign: 'center',
    color: COLORS.secondary,
    fontSize: 16,
  },
  countButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  priceArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    marginLeft: 30,
    color: COLORS.secondary,
    fontSize: 18,
  },
  priceCount: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default memo(CartGoodCard);
