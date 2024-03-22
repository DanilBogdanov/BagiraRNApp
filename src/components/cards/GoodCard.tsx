import {Image, StyleSheet, Text, View} from 'react-native';
import {GoodData} from 'types/good';

type GoodCardProps = {
  goodData: GoodData;
};

const GoodCard = ({goodData}: GoodCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: goodData.imgUrl}} height={130} width={130} />
      <Text numberOfLines={4} style={styles.title}>
        {goodData.name}
      </Text>
      <Text style={styles.price}>{goodData.price}₽</Text>
      <View style={styles.buyButton}>
        <Text style={styles.buyButtonTitle}>В КОРЗИНУ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    alignItems: 'center',
    padding: 5,
    rowGap: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: 'gray',
    fontSize: 12,
  },
  price: {
    color: 'rgb(99, 140, 71)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyButton: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#4F8EF7',
  },
  buyButtonTitle: {
    color: 'white',
  },
});

export default GoodCard;
