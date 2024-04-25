import {memo} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoodData} from 'types/good';
import {COLORS, SIZES} from 'constants/theme';

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
          <View style={styles.actions}>
            <View style={styles.col}>
              <Text style={styles.price}>{goodData.price}₽</Text>
              <View style={styles.cartArea}>
                <Pressable
                  style={styles.countButton}
                  onPress={onDecreaseInCart}>
                  <Ionicons
                    color={COLORS.white}
                    size={SIZES.md}
                    name={'remove'}
                  />
                </Pressable>
                <Text style={styles.cartCount}>{cartCount}</Text>
                <Pressable
                  style={styles.countButton}
                  onPress={() => increaseInCart(goodData.id)}>
                  <Ionicons color={COLORS.white} size={SIZES.md} name={'add'} />
                </Pressable>
              </View>
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
  price: {
    color: COLORS.secondary,
    fontSize: SIZES.h4,
  },
  cartArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.sm,
  },
  countButton: {
    width: SIZES.l,
    height: SIZES.l,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.primary,
  },
  cartCount: {
    minWidth: SIZES.xl,
    textAlign: 'center',
    color: COLORS.text,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
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
