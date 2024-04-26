import {memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SIZES, COLORS} from 'constants/theme';

type BuyButtonProps = {
  onPress: () => void;
};

const BuyButton = ({onPress}: BuyButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons color={COLORS.primary} size={SIZES.md} name={'cart'} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.l,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.primaryLight,
  },
});

export default memo(BuyButton);
