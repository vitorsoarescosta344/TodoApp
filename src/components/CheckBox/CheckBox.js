import {Icon} from '@rneui/themed';
import {Text, TouchableOpacity, View} from 'react-native';
import textStyles from '../../utils/GlobalStyles/textStyles';

export default function CheckBox({title, checked, style, onPress, children}) {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
      <TouchableOpacity onPress={() => onPress()}>
        <Icon
          type="material-community"
          name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          color={'#1A84BF'}
          style={{marginRight: 10}}
          size={25}
        />
      </TouchableOpacity>
      <Text style={[textStyles.textMedium, {color: '#000'}]}>{title}</Text>
      {children}
    </View>
  );
}
