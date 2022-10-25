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
import styles from './styles';

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
      <Pressable onPress={() => setVisible(false)} style={styles.background}>
        <View style={styles.modalContainer}>
          <Text
            style={[textStyles.textBold, {color: '#000', marginBottom: 20}]}>
            Nova tarefa
          </Text>
          <View style={styles.textInputContainer}>
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
            style={[
              styles.textInputContainer,
              {
                height: 100,
              },
            ]}>
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
                style={styles.buttonContainer}>
                <Text style={textStyles.textBold}>Adicionar</Text>
              </TouchableOpacity>
            )}
          </>
        </View>
      </Pressable>
    </Modal>
  );
}
