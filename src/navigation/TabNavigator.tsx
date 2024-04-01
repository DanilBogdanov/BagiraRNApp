import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen, CatalogScreen, ProfileScreen, CartScreen} from 'screens';
import {useCartStore} from 'store/cartStore';
import {Screens} from 'types/Screens';

type IconProps = {
  name: string;
  focused: boolean;
  size: number;
  color: string;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cart = useCartStore(state => state.cart);

  const icon = ({name, focused, size, color}: IconProps) => (
    <Ionicons
      name={focused ? name : `${name}-outline`}
      size={size}
      color={color}
    />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: prop => icon({name: 'home', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Catalog}
        component={CatalogScreen}
        options={{
          tabBarIcon: prop => icon({name: 'storefront', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: prop => icon({name: 'person', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Cart}
        component={CartScreen}
        options={{
          tabBarBadge: cart.size,
          tabBarIcon: prop => icon({name: 'cart', ...prop}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
