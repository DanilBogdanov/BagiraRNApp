import {StyleSheet, View} from 'react-native';
import GoodCardSkeleton from './GoodCardSkeleton';

type GoodListSkeletonProps = {
  numColumns: number;
};

const getGoodSkeletons = (numColumns: number) =>
  [...Array(numColumns).keys()].map(value => <GoodCardSkeleton key={value} />);

const GoodListSkeleton = ({numColumns}: GoodListSkeletonProps) => {
  const getRow = () => (
    <View style={styles.row}>{getGoodSkeletons(numColumns)}</View>
  );

  return (
    <View style={styles.container}>
      {getRow()}
      {getRow()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default GoodListSkeleton;
