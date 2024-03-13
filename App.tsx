import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View>
          <Text>App</Text>
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
