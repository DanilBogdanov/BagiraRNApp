import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from 'constants/theme';

const SearchPlaceholder = () => {
  return (
    <View>
      <Text style={styles.text}>
        Начните поиск по бренду или названию товара
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: SIZES.l,
    color: COLORS.text,
    fontSize: SIZES.h4,
    textAlign: 'center',
  },
});

export default SearchPlaceholder;
