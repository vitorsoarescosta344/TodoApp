import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import textStyles from '../../utils/GlobalStyles/textStyles';
import CheckBox from '../CheckBox';

export default function TaskListItem({item}) {
  const [hide, setHide] = useState(true);

  return (
    <View style={{paddingVertical: 10}}>
      <CheckBox title={item.name} />
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
  );
}
