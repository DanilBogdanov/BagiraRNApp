import AnimalIcon from 'components/menu/goodMenu/animalBar/AnimalIcon';
import {Image, StyleSheet, View} from 'react-native';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {Animal} from 'types/goodMenu';

const icons = [
  {name: 'paw', animal: Animal.All, title: 'Все'},
  {name: 'cat', animal: Animal.Cats, title: 'Кошки'},
  {name: 'dog', animal: Animal.Dogs, title: 'Собаки'},
  {name: 'bird', animal: Animal.Others, title: 'Другие'},
];

const HomeScreen = () => {
  const setSelectedAnimal = useGoodMenuStore(state => state.setSelectedAnimal);
  const setIsDrawerOpened = useGoodMenuStore(state => state.setIsDrawerOpened);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('assets/img/bagira.jpg')} />
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
    padding: 10,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 270,
    objectFit: 'contain',
  },
  row: {
    gap: 10,
  },
  text: {
    color: 'black',
  },
});

export default HomeScreen;
