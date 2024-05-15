import {StackScreenProps} from '@react-navigation/stack';
import {SearchList} from 'components/lists';
import {CatalogNavigatorParamList} from 'navigation/CatalogNavigator';
import {Screens} from 'types/Screens';

type SearchScreenProps = StackScreenProps<
  CatalogNavigatorParamList,
  Screens.Search
>;

export type SearchNavigationProps = SearchScreenProps['navigation'];

const SearchScreen = ({navigation}: SearchScreenProps) => {
  return <SearchList navigation={navigation} />;
};

export default SearchScreen;
