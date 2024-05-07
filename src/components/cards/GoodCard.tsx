import {memo} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {CartCountAction} from 'components/actions';
import {BuyButton} from 'components/buttons';
import {GoodData} from 'types/good';
import {COLORS, SIZES} from 'constants/theme';

const BASE_URL = 'https://danildev.net/';

type GoodCardProps = {
  goodData: GoodData;
  cartCount?: number;
  onPress: (id: number) => void;
};

const GoodCard = ({goodData, cartCount, onPress}: GoodCardProps) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(goodData.id)}>
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
        <CartCountAction goodId={goodData.id} cartCount={cartCount} />
      ) : (
        <BuyButton goodId={goodData.id} />
      )}
    </Pressable>
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
});

export default memo(GoodCard);
