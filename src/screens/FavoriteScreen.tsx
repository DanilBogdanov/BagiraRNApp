import {StackScreenProps} from '@react-navigation/stack';
import {FavoriteList} from 'components/lists';
import {FavoriteNavigatorParamList} from 'navigation/FavoriteNavigator';
import {Screens} from 'types/Screens';

type FavoriteScreenProps = StackScreenProps<
  FavoriteNavigatorParamList,
  Screens.Favorite
>;

export type FavoriteNavigationProps = FavoriteScreenProps['navigation'];

const FavoriteScreen = ({navigation}: FavoriteScreenProps) => {
  return <FavoriteList navigation={navigation} />;
};

export default FavoriteScreen;
