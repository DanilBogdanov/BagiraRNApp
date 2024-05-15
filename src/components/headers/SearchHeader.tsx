import {useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSearchStore} from 'store/searchStore';
import {COLORS, SIZES} from 'constants/theme';

const SearchHeader = () => {
  const [text, setText] = useState('');
  const setSearchQuery = useSearchStore(state => state.setSearchQuery);

  const handleSubmit = () => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        underlineColorAndroid={COLORS.secondaryLight}
        returnKeyType="search"
        placeholder="Поиск по каталогу"
        placeholderTextColor={COLORS.secondary}
        value={text}
        onChangeText={setText}
        onEndEditing={handleSubmit}
        autoFocus
      />
      {text && (
        <Pressable onPress={() => setText('')}>
          <Ionicons
            name="close-circle"
            size={SIZES.m}
            color={COLORS.secondary}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.l * 2,
  },
  text: {
    flex: 1,
    color: COLORS.text,
    fontSize: SIZES.h5,
  },
});

export default SearchHeader;
