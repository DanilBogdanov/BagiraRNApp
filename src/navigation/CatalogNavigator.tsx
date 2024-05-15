import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CatalogHeader, SearchHeader} from 'components/headers';
import {CatalogScreen, DetailedScreen, SearchScreen} from 'screens';
import {Screens} from 'types/Screens';

export type CatalogNavigatorParamList = {
  [Screens.Catalog]: undefined;
  [Screens.Search]: undefined;
  [Screens.Detailed]: {id: number};
};

const Stack = createNativeStackNavigator<CatalogNavigatorParamList>();

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
      <Stack.Screen
        name={Screens.Search}
        component={SearchScreen}
        options={{
          headerTitle: SearchHeader,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={Screens.Detailed}
        component={DetailedScreen}
        options={{
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CatalogNavigator;
