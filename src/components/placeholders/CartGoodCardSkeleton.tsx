import {StyleSheet, View} from 'react-native';
import Skeleton from './Skeleton';

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
    columnGap: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 1,
  },
  content: {
    flex: 1,
    rowGap: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CartGoodCardSkeleton;
