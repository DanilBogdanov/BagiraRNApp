import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CatalogNavigatorParamList} from 'navigation/CatalogNavigator';
import {CardOrderBlock, FavoriteAction} from 'components/actions';
import {useFavoriteStore} from 'store/favoriteStore';
import {useGoodQuery} from 'queries/goodQuery';
import {Screens} from 'types/Screens';
import {COLORS, SIZES} from 'constants/theme';

const BASE_URL = 'https://danildev.net/';

type DetailedScreenProps = StackScreenProps<
  CatalogNavigatorParamList,
  Screens.Detailed
>;

const DetailedScreen = ({route}: DetailedScreenProps) => {
  const {data: goodData, isSuccess, isLoading} = useGoodQuery(route.params.id);
  const favorite = useFavoriteStore(state => state.favorite);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} />}
      {isSuccess && (
        <>
          <ScrollView>
            <Image
              style={styles.img}
              source={{uri: BASE_URL + goodData.imgUrl}}
            />
            <FavoriteAction
              goodId={goodData.id}
              isFavorite={favorite.has(goodData.id)}
              absolute
              isInactiveOutline
              inactiveColor={COLORS.secondary}
            />
            <Text style={styles.title}>{goodData.name}</Text>
            <Text style={styles.description}>{goodData.description}</Text>
          </ScrollView>
          <CardOrderBlock goodData={goodData} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  img: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },
  title: {
    padding: SIZES.sm,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  description: {
    padding: SIZES.sm,
    fontSize: SIZES.h5,
    color: 'black',
  },
});

export default DetailedScreen;
