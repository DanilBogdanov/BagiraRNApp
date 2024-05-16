import {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import GoodList from './GoodList';
import {GoodListSkeleton} from 'components/skeletons';
import {NotFound, SearchPlaceholder} from 'components/placeholders';
import {useSearchInfiniteQuery} from 'queries/goodQuery';
import {SearchNavigationProps} from 'screens/SearchScreen';
import {useSearchStore} from 'store/searchStore';
import {Screens} from 'types/Screens';
import {COLORS} from 'constants/theme';

const NUM_COLUMNS = 2;

type SearchListProps = {
  navigation: SearchNavigationProps;
};

const SearchList = ({navigation}: SearchListProps) => {
  const searchQuery = useSearchStore(state => state.searchQuery);

  const onCardPress = useCallback(
    (id: number) => {
      navigation.navigate(Screens.Detailed, {id});
    },
    [navigation],
  );

  const onNotFoundPress = () => {
    navigation.navigate(Screens.Catalog);
  };

  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchInfiniteQuery(searchQuery);

  return (
    <View style={styles.container}>
      {!searchQuery && <SearchPlaceholder />}
      {isLoading && <GoodListSkeleton numColumns={NUM_COLUMNS} />}
      {isSuccess && !data.pages[0].count && (
        <NotFound onPress={onNotFoundPress} />
      )}
      {isSuccess && !!data.pages[0].count && (
        <GoodList
          queryKey={searchQuery}
          data={data}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          onPress={onCardPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  text: {
    color: COLORS.text,
  },
});

export default SearchList;
