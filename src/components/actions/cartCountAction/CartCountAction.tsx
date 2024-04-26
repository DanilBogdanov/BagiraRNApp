import {StyleSheet, Text, View} from 'react-native';
import CartCountButton from './CartCountButton';
import {COLORS, SIZES} from 'constants/theme';

type CartCountActionProps = {
  cartCount: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CartCountAction = ({
  cartCount,
  onIncrease,
  onDecrease,
}: CartCountActionProps) => {
  return (
    <View style={styles.container}>
      <CartCountButton type={'decrease'} onPress={onDecrease} />
      <Text style={styles.cartCount}>{cartCount}</Text>
      <CartCountButton type={'increase'} onPress={onIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default CartCountAction;
