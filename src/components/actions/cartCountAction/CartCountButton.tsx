import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from 'constants/theme';

type CartCountButtonProps = {
  type: 'increase' | 'decrease';
  disabled?: boolean;
  onPress: () => void;
};

const CartCountButton = ({type, disabled, onPress}: CartCountButtonProps) => {
  const iconName = type === 'increase' ? 'add' : 'remove';

  return (
    <Pressable
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}>
      <Ionicons color={COLORS.white} size={SIZES.md} name={iconName} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.l,
    height: SIZES.l,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.primary,
  },
  disabled: {
    backgroundColor: COLORS.primaryLight,
  },
});

export default CartCountButton;
