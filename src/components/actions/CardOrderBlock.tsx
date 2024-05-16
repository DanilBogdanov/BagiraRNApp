import {StyleSheet, Text, View} from 'react-native';
import {BuyButton} from 'components/buttons';
import CartCountAction from './cartCountAction/CartCountAction';
import {useCartStore} from 'store/cartStore';
import {GoodData} from 'types/good';
import {COLORS, SIZES} from 'constants/theme';

type CardOrderBlockProps = {
  goodData: GoodData;
};

const CardOrderBlock = ({goodData}: CardOrderBlockProps) => {
  const cart = useCartStore(state => state.cart);

  const cartCount = cart.get(goodData.id);

  return (
    <View style={styles.container}>
      <View style={styles.priceArea}>
        <Text style={styles.price}>{goodData.price}₽</Text>
      </View>
      <View style={styles.cartArea}>
        {cartCount ? (
          <CartCountAction goodId={goodData.id} cartCount={cartCount} />
        ) : (
          <BuyButton goodId={goodData.id} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: SIZES.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.secondaryLight,
  },
  priceArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  cartArea: {
    width: '50%',
  },
});

export default CardOrderBlock;
