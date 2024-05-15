import 'react-native-gesture-handler';

import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {COLORS} from 'constants/theme';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
