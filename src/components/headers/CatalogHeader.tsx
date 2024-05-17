import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {useSearchStore} from 'store/searchStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CatalogNavigationProps} from 'screens/CatalogScreen';
import {COLORS, SIZES} from 'constants/theme';
import {Screens} from 'types/Screens';

const CatalogHeader = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGoodGroup = useGoodMenuStore(state => state.selectedGoodGroup);
  const setSearchQuery = useSearchStore(state => state.setSearchQuery);
  const navigation = useNavigation<CatalogNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.animalTitle}>{selectedAnimal}</Text>
        {selectedGoodGroup !== null && (
          <Text style={styles.groupTitle} numberOfLines={1}>
            : {selectedGoodGroup.name.trim()}
          </Text>
        )}
      </View>
      <Pressable
        onPress={() => {
          setSearchQuery('');
          navigation.navigate(Screens.Search);
        }}>
        <Ionicons name="search-circle" size={SIZES.l} color={COLORS.text} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: SIZES.m,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  animalTitle: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.black,
  },
  groupTitle: {
    fontSize: SIZES.h5,
    fontWeight: '600',
    color: COLORS.black,
  },
});

export default CatalogHeader;
