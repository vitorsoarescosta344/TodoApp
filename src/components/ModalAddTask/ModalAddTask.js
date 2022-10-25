import {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskRealmContext} from '../../models';
import textStyles from '../../utils/GlobalStyles/textStyles';

const {useRealm} = TaskRealmContext;

export default function ModalAddTask({visible, setVisible, onSubmit}) {
  const realm = useRealm();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    onSubmit(name, description);
    setName('');
    setDescription('');
    setVisible(false);
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <Pressable
        onPress={() => setVisible(false)}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingVertical: 15,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '90%',
          }}>
          <Text
            style={[textStyles.textBold, {color: '#000', marginBottom: 20}]}>
            Nova tarefa
          </Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 40,
              marginBottom: 20,
              paddingHorizontal: 5,
              borderWidth: 1,
              borderColor: '#e5e5e5',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Nome"
              style={[textStyles.textRegular, {color: '#333'}]}
              value={name}
              onChangeText={text => {
                text.length === 80 ? console.log(text.length) : setName(text);
              }}
            />
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 100,
              paddingHorizontal: 5,
              borderWidth: 1,
              borderColor: '#e5e5e5',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Descricao"
              multiline
              style={[textStyles.textRegular, {color: '#333'}]}
              value={description}
              onChangeText={text => {
                text.length === 200
                  ? console.log(text.length)
                  : setDescription(text);
              }}
            />
          </View>
          <>
            {loading ? (
              <>
                <ActivityIndicator color={'#1A84BF'} />
              </>
            ) : (
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  height: 40,
                  paddingHorizontal: 30,
                  backgroundColor: '#1A84BF',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                }}>
                <Text style={textStyles.textBold}>Adicionar</Text>
              </TouchableOpacity>
            )}
          </>
        </View>
      </Pressable>
    </Modal>
  );
}
