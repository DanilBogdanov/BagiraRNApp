import {StyleSheet, Text, View} from 'react-native';
import {useGoodMenuStore} from 'store/goodMenuStore';

const CatalogHeader = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGoodGroup = useGoodMenuStore(state => state.selectedGoodGroup);

  return (
    <View style={styles.container}>
      <Text style={styles.animalTitle}>{selectedAnimal}</Text>
      {selectedGoodGroup !== null && (
        <Text style={styles.groupTitle} numberOfLines={1}>
          : {selectedGoodGroup.name.trim()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  animalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default CatalogHeader;
