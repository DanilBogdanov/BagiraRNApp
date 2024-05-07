import {memo} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CartCountAction} from 'components/actions';
import {useCartStore} from 'store/cartStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoodData} from 'types/good';
import {COLORS, SIZES} from 'constants/theme';

const BASE_URL = 'https://danildev.net/';

type CartGoodCardProps = {
  goodData: GoodData;
  cartCount: number;
};

const CartGoodCard = ({goodData, cartCount}: CartGoodCardProps) => {
  const removeFromCart = useCartStore(state => state.remove);

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
          <View style={styles.actions}>
            <View style={[styles.col, styles.leftCol]}>
              <Text style={styles.price}>{goodData.price}₽</Text>
              <CartCountAction
                goodId={goodData.id}
                cartCount={cartCount}
                onRemove={onRemoveFromCart}
              />
            </View>
            <View style={styles.col}>
              <Text style={styles.priceCount}>
                {goodData.price * (cartCount ?? 0)}₽
              </Text>
              <Pressable style={styles.deleteBtn} onPress={onRemoveFromCart}>
                <Ionicons
                  color={COLORS.secondary}
                  size={SIZES.md}
                  name={'trash'}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: SIZES.s,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.s,
    borderRadius: SIZES.sm,
    elevation: 2,
  },
  image: {
    objectFit: 'contain',
  },
  content: {
    flex: 1,
    rowGap: SIZES.sm,
  },
  title: {
    fontSize: SIZES.h6,
    color: COLORS.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    alignItems: 'center',
    rowGap: SIZES.sm,
  },
  leftCol: {
    width: 140,
  },
  price: {
    color: COLORS.secondary,
    fontSize: SIZES.h4,
  },
  priceCount: {
    color: COLORS.green,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
  deleteBtn: {
    alignSelf: 'flex-end',
  },
});

export default memo(CartGoodCard);
