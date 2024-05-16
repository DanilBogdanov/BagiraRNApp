import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen, ProfileScreen, CartScreen} from 'screens';
import CatalogNavigator, {CatalogNavigatorParamList} from './CatalogNavigator';
import {HomeHeader} from 'components/headers';
import {useCartStore} from 'store/cartStore';
import {NavigatorScreenParams} from '@react-navigation/native';
import {Screens} from 'types/Screens';
import FavoriteScreen from 'screens/FavoriteScreen';

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
  [Screens.CatalogNavigator]: NavigatorScreenParams<CatalogNavigatorParamList>;
  [Screens.Profile]: undefined;
  [Screens.Cart]: undefined;
  [Screens.Favorite]: undefined;
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
          headerTitle: HomeHeader,
          tabBarIcon: prop => icon({name: 'home', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.CatalogNavigator}
        component={CatalogNavigator}
        options={{
          title: 'Каталог',
          headerShown: false,
          tabBarIcon: prop => icon({name: 'storefront', ...prop}),
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
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          title: 'Профиль',
          tabBarIcon: prop => icon({name: 'person', ...prop}),
        }}
      />
      <Tab.Screen
        name={Screens.Favorite}
        component={FavoriteScreen}
        options={{
          unmountOnBlur: true,
          title: 'Избранное',
          tabBarIcon: prop => icon({name: 'heart', ...prop}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
