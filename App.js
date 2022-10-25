import {Provider} from 'react-redux';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {TaskRealmContext} from './src/models';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {persistedStore, store} from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  const {RealmProvider} = TaskRealmContext;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RealmProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </RealmProvider>
      </PersistGate>
    </Provider>
  );
}
