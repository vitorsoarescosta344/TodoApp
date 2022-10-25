import {TaskRealmContext} from './src/models';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const {RealmProvider} = TaskRealmContext;

  return (
    <RealmProvider>
      <HomeScreen />
    </RealmProvider>
  );
}
