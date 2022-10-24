import {FAB} from '@rneui/base';
import {FlatList, ScrollView, View} from 'react-native';
import TaskListItem from '../../components/TaskListItem';
import Container from '../../layout/Container';

export default function HomeScreen() {
  return (
    <>
      <Container>
        <View style={{flex: 1}}>
          <View style={{padding: 15}}>
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: '#D9D9D9'}} />
              )}
              renderItem={() => (
                <TaskListItem
                  item={{
                    name: 'Task',
                    description:
                      'DescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescritionDescrition',
                  }}
                />
              )}
            />
          </View>
        </View>
      </Container>
      <FAB
        visible={true}
        placement="right"
        icon={{name: 'add', color: 'white'}}
        color="#1A84BF"
      />
    </>
  );
}
