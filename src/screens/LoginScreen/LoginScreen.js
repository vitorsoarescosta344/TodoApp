import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header as HeaderRNE, Icon} from '@rneui/themed';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';
import {useState} from 'react';
import {setSignIn} from '../../redux/slices/authSlice';
import {useDispatch} from 'react-redux';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      isLoggedIn: false,
      token: null,
    };

    dispatch(setSignIn(user));
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderRNE
        barStyle="default"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              type="material-community"
              name="chevron-left"
              size={25}
              color={'#FFF'}
            />
          </TouchableOpacity>
        }
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Email"
            style={[textStyles.textRegular, {color: '#333'}]}
            value={''}
            onChangeText={text => {
              text.length === 80 ? console.log(text.length) : setName(text);
            }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={[textStyles.textRegular, {color: '#333'}]}
            value={''}
            onChangeText={text => {
              text.length === 80 ? console.log(text.length) : setName(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={textStyles.textBold}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
