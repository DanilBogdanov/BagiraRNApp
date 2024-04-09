import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import GoodCard from 'components/cards/GoodCard';
import {useGoodsInfiniteQuery} from 'queries/goodQuery';
import {useCartStore} from 'store/cartStore';
import {useGoodMenuStore} from 'store/goodMenuStore';

const GoodList = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGroup = useGoodMenuStore(state => state.selectedGroup);
  const cart = useCartStore(state => state.cart);
  const addToCart = useCartStore(state => state.add);
  const increaseInCart = useCartStore(state => state.increase);
  const decreaseInCart = useCartStore(state => state.decrease);

  const {data, isSuccess, hasNextPage, isFetchingNextPage, fetchNextPage} =
    useGoodsInfiniteQuery(selectedAnimal, selectedGroup);

  return (
    <>
      {isSuccess && (
        <FlatList
          data={data?.pages.map(page => page.results).flat()}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          onEndReachedThreshold={2}
          onEndReached={() => {
            hasNextPage && !isFetchingNextPage && fetchNextPage();
          }}
          ListFooterComponent={
            <>{isFetchingNextPage && <ActivityIndicator size={50} />}</>
          }
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.listRow}
          renderItem={({item}) => (
            <GoodCard
              goodData={item}
              cartCount={cart.get(item.id)}
              addToCart={addToCart}
              increaseInCart={increaseInCart}
              decreaseInCart={decreaseInCart}
            />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listRow: {
    justifyContent: 'space-between',
  },
  listContainer: {
    gap: 10,
    padding: 10,
  },
});

export default GoodList;
