import {memo, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import CartCountButton from './CartCountButton';
import {useCartStore} from 'store/cartStore';
import {COLORS, SIZES} from 'constants/theme';
import {CART_COUNT_LIMIT} from 'constants/cart';

const checkInput = (input: string): string => {
  let text = input.replace(/[^0-9]/g, '');

  if (text) {
    const num = parseInt(text, 10);

    if (num > CART_COUNT_LIMIT) {
      text = CART_COUNT_LIMIT.toString();
    }
  }

  return text;
};

type CartCountActionProps = {
  goodId: number;
  cartCount: number;
  onRemove?: () => void;
};

const CartCountAction = ({
  goodId,
  cartCount,
  onRemove,
}: CartCountActionProps) => {
  const increaseInCart = useCartStore(state => state.increase);
  const decreaseInCart = useCartStore(state => state.decrease);
  const setInCart = useCartStore(state => state.set);
  const [count, setCount] = useState<string>('');
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setEdit(false);

    if (count) {
      const countNum = parseInt(count, 10);

      if (countNum === 0 && onRemove) {
        onRemove();
      } else {
        setInCart(goodId, countNum);
      }
    }
  };

  const onDecrease = () => {
    if (cartCount === 1 && onRemove) {
      onRemove();
    } else {
      decreaseInCart(goodId);
    }
  };

  const onFocus = () => {
    setCount('');
    setEdit(true);
  };

  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <CartCountButton type={'decrease'} onPress={onDecrease} />
      <View style={styles.priceArea}>
        <Text style={[styles.text, styles.cartCount, edit && styles.hidden]}>
          {cartCount}
        </Text>
        <TextInput
          inputMode="numeric"
          maxLength={3}
          style={[styles.text, styles.input, !edit && styles.hidden]}
          value={count}
          onChangeText={text => setCount(checkInput(text))}
          onEndEditing={handleSubmit}
          textAlign="center"
          onFocus={onFocus}
          contextMenuHidden={true}
        />
      </View>
      <CartCountButton
        type={'increase'}
        disabled={cartCount >= CART_COUNT_LIMIT}
        onPress={() => increaseInCart(goodId)}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.sm,
  },
  priceArea: {
    flex: 1,
  },
  text: {
    color: COLORS.text,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
  },
  cartCount: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  input: {
    position: 'absolute',
    padding: 0,
    width: '100%',
    height: '100%',
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  hidden: {
    opacity: 0,
  },
});

export default memo(CartCountAction);
