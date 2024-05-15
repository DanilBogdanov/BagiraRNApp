import {COLORS, SIZES} from 'constants/theme';
import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type GoodListHeaderProps = {
  count: number;
};

const GoodListHeader = ({count}: GoodListHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Всего:
        <Text style={styles.count}> {count}</Text> шт
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.m,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: SIZES.s,
  },
  text: {
    fontSize: SIZES.h5,
    color: COLORS.text,
  },
  count: {
    fontWeight: 'bold',
  },
});

export default memo(GoodListHeader);
