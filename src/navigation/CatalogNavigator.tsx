import {createStackNavigator} from '@react-navigation/stack';
import CatalogHeader from 'components/headers/CatalogHeader';
import {CatalogScreen, DetailedScreen} from 'screens';
import {Screens} from 'types/Screens';

export type CatalogNavigatorParamList = {
  [Screens.Catalog]: undefined;
  [Screens.Detailed]: {id: number};
};

const Stack = createStackNavigator<CatalogNavigatorParamList>();

const CatalogNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Catalog}>
      <Stack.Screen
        name={Screens.Catalog}
        component={CatalogScreen}
        options={{
          headerTitle: CatalogHeader,
        }}
      />
      <Stack.Screen name={Screens.Detailed} component={DetailedScreen} />
    </Stack.Navigator>
  );
};

export default CatalogNavigator;
