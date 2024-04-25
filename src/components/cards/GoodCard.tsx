import {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoodData} from 'types/good';
import {COLORS, SIZES} from 'constants/theme';

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
      <Text numberOfLines={4} style={styles.title}>
        {goodData.name}
      </Text>
      <Text style={styles.price}>{goodData.price}₽</Text>
      {cartCount ? (
        <View style={styles.cartArea}>
          <Pressable
            style={styles.countButton}
            onPress={() => decreaseInCart(goodData.id)}>
            <Ionicons color={COLORS.white} size={SIZES.md} name={'remove'} />
          </Pressable>
          <Text style={styles.cartCount}>{cartCount}</Text>
          <Pressable
            style={styles.countButton}
            onPress={() => increaseInCart(goodData.id)}>
            <Ionicons color={COLORS.white} size={SIZES.md} name={'add'} />
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={styles.buyButton}
          onPress={() => addToCart(goodData.id)}>
          <Ionicons color={COLORS.primary} size={SIZES.md} name={'cart'} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SIZES.xs,
    alignSelf: 'flex-end',
    padding: SIZES.s,
    rowGap: SIZES.xs,
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  image: {
    objectFit: 'contain',
  },
  title: {
    color: COLORS.text,
    fontSize: SIZES.h6,
  },
  price: {
    color: COLORS.green,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
  cartArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.sm,
  },
  cartCount: {
    color: COLORS.text,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
  },
  countButton: {
    width: SIZES.l,
    height: SIZES.l,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.primary,
  },
  buyButton: {
    width: '100%',
    height: SIZES.l,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.primaryLight,
  },
});

export default memo(GoodCard);
