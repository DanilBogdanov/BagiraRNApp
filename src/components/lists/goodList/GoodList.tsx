import {useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import GoodCard from 'components/cards/GoodCard';
import {useGoodsInfiniteQuery} from 'queries/goodQuery';
import {useCartStore} from 'store/cartStore';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {GoodData} from 'types/good';
import GoodListSkeleton from 'components/placeholders/GoodListSkeleton';
import {SIZES} from 'constants/theme';

const NUM_COLUMNS = 2;

const GoodList = () => {
  const listRef = useRef<FlashList<GoodData> | null>(null);
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGoodGroup = useGoodMenuStore(state => state.selectedGoodGroup);
  const cart = useCartStore(state => state.cart);
  const addToCart = useCartStore(state => state.add);
  const increaseInCart = useCartStore(state => state.increase);
  const decreaseInCart = useCartStore(state => state.decrease);

  useEffect(() => {
    listRef.current?.scrollToOffset({offset: 0});
  }, [selectedAnimal, selectedGoodGroup]);

  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGoodsInfiniteQuery(selectedAnimal, selectedGoodGroup?.id ?? null);

  const renderItem = ({item}: {item: GoodData}) => (
    <GoodCard
      goodData={item}
      cartCount={cart.get(item.id)}
      addToCart={addToCart}
      increaseInCart={increaseInCart}
      decreaseInCart={decreaseInCart}
    />
  );

  return (
    <View style={styles.container}>
      {isLoading && <GoodListSkeleton numColumns={NUM_COLUMNS} />}
      {isSuccess && (
        <FlashList
          ref={listRef}
          data={data.pages.map(page => page.results).flat()}
          keyExtractor={item => item.id.toString()}
          numColumns={NUM_COLUMNS}
          onEndReachedThreshold={2}
          onEndReached={() => {
            hasNextPage && !isFetchingNextPage && fetchNextPage();
          }}
          ListFooterComponent={
            <>{isFetchingNextPage && <ActivityIndicator size={SIZES.xl} />}</>
          }
          contentContainerStyle={styles.listContainer}
          fadingEdgeLength={SIZES.sm}
          estimatedItemSize={300}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  listContainer: {
    padding: SIZES.xs,
  },
});

export default GoodList;
