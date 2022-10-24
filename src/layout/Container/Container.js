import {Icon} from '@rneui/base';
import {Header as HeaderRNE} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';

export default function Container({children}) {
  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderRNE
        barStyle="default"
        rightComponent={
          <>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="material-community"
                name="account-circle"
                size={25}
                color={'#FFF'}
              />
            </TouchableOpacity>
          </>
        }
      />
      {children}
    </SafeAreaProvider>
  );
}
