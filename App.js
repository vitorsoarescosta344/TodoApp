import {TaskRealmContext} from './src/models';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const {RealmProvider} = TaskRealmContext;

  return (
    <RealmProvider>
      <LoginScreen />
    </RealmProvider>
  );
}
