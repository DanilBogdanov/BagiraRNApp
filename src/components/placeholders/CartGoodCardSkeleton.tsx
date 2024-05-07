import {StyleSheet, View} from 'react-native';
import Skeleton from './Skeleton';
import {COLORS, SIZES} from 'constants/theme';

const CartGoodCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={100} height={100} />
      <View style={styles.content}>
        <Skeleton width={'100%'} height={50} />
        <View style={styles.actions}>
          <Skeleton width={130} height={70} />
          <Skeleton width={80} height={70} />
        </View>
      </View>
    </View>
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
  content: {
    flex: 1,
    rowGap: SIZES.sm,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CartGoodCardSkeleton;
