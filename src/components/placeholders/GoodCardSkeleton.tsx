import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Skeleton from './Skeleton';
import {COLORS} from 'constants/theme';

const GoodCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={130} height={130} />
      <Skeleton width={'90%'} height={50} />
      <Skeleton width={50} height={30} />
      <Skeleton width={'100%'} height={40} radius={20} />
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
    margin: 5,
    alignSelf: 'flex-end',
    padding: 5,
    rowGap: 5,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 2,
  },
});

export default memo(GoodCardSkeleton);
