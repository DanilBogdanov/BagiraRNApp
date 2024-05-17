import {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import GoodList from './GoodList';
import {GoodListSkeleton} from 'components/skeletons';
import {useGoodsInfiniteQuery} from 'queries/goodQuery';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {CatalogNavigationProps} from 'screens/CatalogScreen';
import {Screens} from 'types/Screens';

const NUM_COLUMNS = 2;

type CatalogListProps = {
  navigation: CatalogNavigationProps;
};

const CatalogList = ({navigation}: CatalogListProps) => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGoodGroup = useGoodMenuStore(state => state.selectedGoodGroup);

  const onPress = useCallback(
    (id: number) => {
      navigation.navigate(Screens.Detailed, {id});
    },
    [navigation],
  );

  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGoodsInfiniteQuery(selectedAnimal, selectedGoodGroup?.id ?? null);

  return (
    <View style={styles.container}>
      {isLoading && <GoodListSkeleton numColumns={NUM_COLUMNS} />}
      {isSuccess && (
        <GoodList
          queryKey={`${selectedAnimal}:${selectedGoodGroup}`}
          data={data}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default CatalogList;
