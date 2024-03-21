import {StyleSheet, View} from 'react-native';
import AnimalIcon from './AnimalIcon';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {Animal} from 'types/goodMenu';

const icons = [
  {name: 'paw', animal: Animal.All, title: 'Все'},
  {name: 'cat', animal: Animal.Cats, title: 'Кошки'},
  {name: 'dog', animal: Animal.Dogs, title: 'Собаки'},
  {name: 'bird', animal: Animal.Others, title: 'Другие'},
];

const AnimalBar = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const setSelectedAnimal = useGoodMenuStore(state => state.setSelectedAnimal);

  return (
    <View style={styles.container}>
      {icons.map(item => (
        <AnimalIcon
          key={item.animal}
          name={item.name}
          title={item.title}
          active={item.animal === selectedAnimal}
          onPress={() => setSelectedAnimal(item.animal)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

export default AnimalBar;
