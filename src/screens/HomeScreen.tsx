import {Image, StyleSheet, View} from 'react-native';
import {TabNavigatorParamList} from 'navigation/TabNavigator';
import AnimalIcon from 'components/menu/goodMenu/animalBar/AnimalIcon';
import {SearchButton} from 'components/buttons';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {useSearchStore} from 'store/searchStore';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Screens} from 'types/Screens';
import {Animal} from 'types/goodMenu';
import {ASSETS, COLORS, SIZES} from 'constants/theme';

const icons = [
  {name: 'paw', animal: Animal.All, title: 'Все'},
  {name: 'cat', animal: Animal.Cats, title: 'Кошки'},
  {name: 'dog', animal: Animal.Dogs, title: 'Собаки'},
  {name: 'bird', animal: Animal.Others, title: 'Другие'},
];

type HomeScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  Screens.Home
>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const setSelectedAnimal = useGoodMenuStore(state => state.setSelectedAnimal);
  const setIsDrawerOpened = useGoodMenuStore(state => state.setIsDrawerOpened);
  const setSearchQuery = useSearchStore(state => state.setSearchQuery);

  const onSearchPress = () => {
    setSearchQuery('');
    navigation.navigate(Screens.CatalogNavigator, {
      screen: Screens.Search,
      initial: false,
    });
  };

  return (
    <View style={styles.container}>
      <SearchButton onPress={onSearchPress} />
      <Image style={styles.img} source={ASSETS.bagira} />
      <View style={styles.row}>
        {icons.map(item => (
          <AnimalIcon
            key={item.animal}
            name={item.name}
            title={item.title}
            active={true}
            onPress={() => {
              setSelectedAnimal(item.animal);
              setIsDrawerOpened(true);
              navigation.navigate(Screens.CatalogNavigator, {
                screen: Screens.Catalog,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  img: {
    width: '100%',
    height: 270,
    objectFit: 'contain',
  },
  row: {
    gap: SIZES.s,
  },
});

export default HomeScreen;
