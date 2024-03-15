import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TabNavigator from 'navigation/TabNavigator';
import {StatusBar} from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
        <StatusBar backgroundColor={'#ffffff'} />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
