import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatalogHeader from 'components/headers/CatalogHeader';
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

const icon = ({name, focused, size, color}: IconProps) => (
  <Ionicons
    name={focused ? name : `${name}-outline`}
    size={size}
    color={color}
  />
);

export type TabNavigatorParamList = {
  [Screens.Home]: undefined;
  [Screens.Catalog]: undefined;
  [Screens.Profile]: undefined;
  [Screens.Cart]: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  const cart = useCartStore(state => state.cart);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: 'Главная',
          tabBarIcon: prop => icon({name: 'home', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Catalog}
        component={CatalogScreen}
        options={{
          title: 'Каталог',
          headerTitle: CatalogHeader,
          tabBarIcon: prop => icon({name: 'storefront', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          title: 'Профиль',
          tabBarIcon: prop => icon({name: 'person', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Cart}
        component={CartScreen}
        options={{
          unmountOnBlur: true,
          title: 'Корзина',
          tabBarBadge: Array.from(cart.values()).reduce(
            (acc, curr) => acc + curr,
            0,
          ),
          tabBarIcon: prop => icon({name: 'cart', ...prop}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
