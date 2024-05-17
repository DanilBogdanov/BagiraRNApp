import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from 'constants/theme';

const EmptyFavorite = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>В избранном пока ничего нет</Text>
        <Text style={styles.text}>Нажмите 💙 на понравившемся товаре</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    rowGap: SIZES.sm,
    marginBottom: SIZES.l,
  },
  title: {
    color: COLORS.text,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.text,
    fontSize: SIZES.h5,
  },
});

export default EmptyFavorite;
