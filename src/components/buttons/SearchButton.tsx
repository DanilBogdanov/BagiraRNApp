import {Pressable, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from 'constants/theme';

type SearchButtonProps = {
  onPress: () => void;
};

const SearchButton = ({onPress}: SearchButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name="search" size={SIZES.m} color={COLORS.text} />
      <Text style={styles.text}>Поиск по каталогу</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.l,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: SIZES.sm,
    paddingLeft: SIZES.s,
    borderRadius: SIZES.s,
    backgroundColor: COLORS.secondaryLight,
  },
  text: {
    color: COLORS.secondary,
    fontSize: SIZES.h5,
  },
});

export default SearchButton;
