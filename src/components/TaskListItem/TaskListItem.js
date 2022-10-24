import {Dialog, Icon} from '@rneui/themed';
import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {UpdateTask} from '../../services/Realm/TaskActions';
import textStyles from '../../utils/GlobalStyles/textStyles';
import CheckBox from '../CheckBox';

export default function TaskListItem({item, index}) {
  const [hide, setHide] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);

  async function SetTaskCompleted() {
    await UpdateTask({index: index});
  }

  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <CheckBox
          title={item.name}
          checked={item.status === 'open' ? false : true}
          onPress={SetTaskCompleted}
        />
        <TouchableOpacity onPress={() => setHide(!hide)}>
          {hide === true ? (
            <Text
              style={[
                textStyles.textRegular,
                {color: '#868686', marginLeft: 35},
              ]}>
              {item.description.length > 35
                ? `${item.description.substring(0, 35)} ...`
                : item.description}
            </Text>
          ) : (
            <Text
              style={[
                textStyles.textRegular,
                {color: '#868686', marginLeft: 35},
              ]}>
              {item.description}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setDialogVisible(true)}>
        <Icon
          type="material-community"
          name="trash-can-outline"
          color={'#333'}
          size={30}
        />
      </TouchableOpacity>
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={() => setDialogVisible(false)}>
        <Dialog.Title title="Deseja excluir?" />
        <Dialog.Actions>
          <Dialog.Button title={'Sim'} />
          <Dialog.Button title={'Cancelar'} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
