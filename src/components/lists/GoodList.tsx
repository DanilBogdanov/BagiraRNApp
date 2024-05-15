import {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import GoodCard from 'components/cards/GoodCard';
import GoodListHeader from 'components/headers/GoodListHeader';
import {useCartStore} from 'store/cartStore';
import {InfiniteData} from '@tanstack/react-query';
import {GoodData, GoodResponse} from 'types/good';
import {SIZES} from 'constants/theme';

const NUM_COLUMNS = 2;

type GoodListProps = {
  queryKey: string;
  data: InfiniteData<GoodResponse, unknown>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  onPress: (id: number) => void;
};

const GoodList = ({
  queryKey,
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  onPress,
}: GoodListProps) => {
  const listRef = useRef<FlashList<GoodData> | null>(null);
  const cart = useCartStore(state => state.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    listRef.current?.scrollToOffset({offset: 0});
    setCount(data.pages[0].count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey]);

  const renderItem = ({item}: {item: GoodData}) => (
    <GoodCard goodData={item} cartCount={cart.get(item.id)} onPress={onPress} />
  );

  return (
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
      ListHeaderComponent={<GoodListHeader count={count} />}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: SIZES.xs,
  },
});

export default GoodList;
