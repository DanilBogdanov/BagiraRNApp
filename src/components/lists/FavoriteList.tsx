import {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {GoodCard} from 'components/cards';
import {GoodListHeader} from 'components/headers';
import {GoodListSkeleton} from 'components/skeletons';
import {EmptyFavorite} from 'components/placeholders';
import {useCartStore} from 'store/cartStore';
import {useFavoriteStore} from 'store/favoriteStore';
import {useGoodListQuery} from 'queries/goodQuery';
import {SIZES} from 'constants/theme';
import {GoodData} from 'types/good';
import {FavoriteNavigationProps} from 'screens/FavoriteScreen';
import {Screens} from 'types/Screens';

const NUM_COLUMNS = 2;

type FavoriteListProps = {
  navigation: FavoriteNavigationProps;
};

const FavoriteList = ({navigation}: FavoriteListProps) => {
  const cart = useCartStore(state => state.cart);
  const favorite = useFavoriteStore(state => state.favorite);
  const removeFavorite = useFavoriteStore(state => state.remove);

  const hasFavorite = favorite.size > 0;

  const keys = Array.from(favorite.keys());
  const {data, isLoading, isSuccess} = useGoodListQuery(keys.sort());

  if (isSuccess) {
    const toRemove = keys.filter(key => !data.some(good => good.id === key));
    toRemove.forEach(key => removeFavorite(key));
  }

  const onCardPress = useCallback(
    (id: number) => {
      navigation.navigate(Screens.Detailed, {id});
    },
    [navigation],
  );

  const renderItem = ({item}: {item: GoodData}) => (
    <GoodCard
      goodData={item}
      cartCount={cart.get(item.id)}
      onPress={onCardPress}
      isFavorite={favorite.has(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      {!hasFavorite && <EmptyFavorite />}
      {isLoading && <GoodListSkeleton numColumns={2} />}
      {isSuccess && hasFavorite && (
        <FlashList
          data={data}
          extraData={[cart, favorite]}
          estimatedItemSize={300}
          keyExtractor={item => item.id.toString()}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={styles.listContainer}
          fadingEdgeLength={SIZES.sm}
          renderItem={renderItem}
          ListHeaderComponent={<GoodListHeader count={data.length} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: SIZES.xs,
  },
});

export default FavoriteList;
