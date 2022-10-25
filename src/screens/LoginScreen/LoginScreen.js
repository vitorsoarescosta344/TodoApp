import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';
import {useState} from 'react';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaProvider style={styles.container}>
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
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={textStyles.textBold}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
