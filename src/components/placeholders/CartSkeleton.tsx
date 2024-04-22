import {StyleSheet, View} from 'react-native';
import CartGoodCardSkeleton from './CartGoodCardSkeleton';
import Skeleton from './Skeleton';
import {COLORS} from 'constants/theme';

const CartSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <CartGoodCardSkeleton />
        <CartGoodCardSkeleton />
      </View>
      <View style={styles.orderArea}>
        <Skeleton width={120} height={50} />
        <Skeleton width={'50%'} height={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  list: {
    padding: 10,
    gap: 10,
  },
  orderArea: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderColor: COLORS.secondaryLight,
  },
});

export default CartSkeleton;
