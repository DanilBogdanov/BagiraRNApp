import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailedScreen, FavoriteScreen} from 'screens';
import {Screens} from 'types/Screens';

export type FavoriteNavigatorParamList = {
  [Screens.Favorite]: undefined;
  [Screens.Detailed]: {id: number};
};

const Stack = createNativeStackNavigator<FavoriteNavigatorParamList>();

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Favorite}>
      <Stack.Screen
        name={Screens.Favorite}
        component={FavoriteScreen}
        options={{title: 'Избранное'}}
      />
      <Stack.Screen
        name={Screens.Detailed}
        component={DetailedScreen}
        options={{headerTitle: '', headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
