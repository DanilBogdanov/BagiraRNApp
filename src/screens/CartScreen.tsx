import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import CartGoodCard from 'components/cards/CartGoodCard';
import {useCartStore} from 'store/cartStore';
import {useGoodListQuery} from 'queries/goodQuery';

const CartScreen = () => {
  const cart = useCartStore(state => state.cart);
  const increaseInCart = useCartStore(state => state.increase);
  const decreaseInCart = useCartStore(state => state.decrease);
  const removeFromCart = useCartStore(state => state.remove);

  const keys = Array.from(cart.keys());
  const {
    data: goods,
    isLoading: isGoodsLoading,
    isSuccess: isGoodsSuccess,
    isPlaceholderData,
  } = useGoodListQuery(keys.sort());

  if (isGoodsSuccess) {
    const toRemove = keys.filter(key => !goods.some(good => good.id === key));
    toRemove.forEach(key => removeFromCart(key));
  }

  const getTotalCount = () =>
    Array.from(cart.values()).reduce((acc, curr) => acc + curr, 0);

  const getTotalPrice = () => {
    if (goods) {
      return goods.reduce((acc, good) => {
        const count = cart.get(good.id) ?? 0;
        const sum = good.price * count;
        return acc + sum;
      }, 0);
    }

    return 0;
  };

  return (
    <View style={styles.container}>
      {isGoodsLoading && <Text style={styles.text}>Loading ...</Text>}
      {(isPlaceholderData || isGoodsSuccess) && (
        <>
          <FlatList
            style={styles.list}
            data={goods}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.row}
            renderItem={({item: good}) => (
              <CartGoodCard
                goodData={good}
                cartCount={cart.get(good.id) ?? 0}
                removeFromCart={removeFromCart}
                increaseInCart={increaseInCart}
                decreaseInCart={decreaseInCart}
              />
            )}
          />
          <View style={styles.orderArea}>
            <View style={styles.cartInfo}>
              <Text style={styles.text}>
                Позиций: <Text style={styles.infoText}>{getTotalCount()}</Text>
              </Text>
              <Text style={styles.text}>
                Cумма: <Text style={styles.infoText}>{getTotalPrice()}₽</Text>
              </Text>
            </View>
            <Pressable style={styles.orderButton}>
              <Text style={styles.orderButtonTitle}>ЗАКАЗАТЬ</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
  },
  row: {
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    color: '#777',
  },
  infoText: {
    fontSize: 20,
    color: '#555',
    fontWeight: '700',
  },
  orderArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  cartInfo: {
    paddingLeft: 10,
  },
  orderButton: {
    width: '50%',
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    borderRadius: 10,
  },
  orderButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
});

export default CartScreen;
