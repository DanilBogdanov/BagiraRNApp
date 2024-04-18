import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import CartGoodCard from 'components/cards/CartGoodCard';
import EmptyCart from 'components/placeholders/EmptyCart';
import CartSkeleton from 'components/placeholders/CartSkeleton';
import {useCartStore} from 'store/cartStore';
import {useGoodListQuery} from 'queries/goodQuery';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamList} from 'navigation/TabNavigator';
import {Screens} from 'types/Screens';

type CartScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  Screens.Cart
>;

const CartScreen = ({navigation}: CartScreenProps) => {
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
      {cart.size === 0 ? (
        <EmptyCart onPress={() => navigation.navigate(Screens.Catalog)} />
      ) : (
        <View style={styles.cart}>
          {isGoodsLoading && <CartSkeleton />}
          {(isPlaceholderData || isGoodsSuccess) && (
            <>
              <FlatList
                data={goods}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.row}
                fadingEdgeLength={20}
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
                    Позиций:{' '}
                    <Text style={styles.infoText}>{getTotalCount()}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Cумма:{' '}
                    <Text style={styles.infoText}>{getTotalPrice()}₽</Text>
                  </Text>
                </View>
                <Pressable style={styles.orderButton}>
                  <Text style={styles.orderButtonTitle}>ЗАКАЗАТЬ</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cart: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    gap: 10,
    padding: 10,
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
