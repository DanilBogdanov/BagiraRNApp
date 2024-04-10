import {useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import GoodCard from 'components/cards/GoodCard';
import {useGoodsInfiniteQuery} from 'queries/goodQuery';
import {useCartStore} from 'store/cartStore';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {GoodData} from 'types/good';

const GoodList = () => {
  const listRef = useRef<FlashList<GoodData> | null>(null);
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGroup = useGoodMenuStore(state => state.selectedGroup);
  const cart = useCartStore(state => state.cart);
  const addToCart = useCartStore(state => state.add);
  const increaseInCart = useCartStore(state => state.increase);
  const decreaseInCart = useCartStore(state => state.decrease);

  useEffect(() => {
    listRef.current?.scrollToOffset({offset: 0});
  }, [selectedAnimal, selectedGroup]);

  const {data, isSuccess, hasNextPage, isFetchingNextPage, fetchNextPage} =
    useGoodsInfiniteQuery(selectedAnimal, selectedGroup);

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
      {isSuccess && (
        <FlashList
          ref={listRef}
          data={data.pages.map(page => page.results).flat()}
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
    padding: 5,
  },
});

export default GoodList;
