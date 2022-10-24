import {FAB} from '@rneui/base';
import {useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import ModalAddTask from '../../components/ModalAddTask';
import TaskListItem from '../../components/TaskListItem';
import Container from '../../layout/Container';
import {GetTasks} from '../../services/Realm/TaskActions';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);

  async function GetAllTasksHandler() {
    const tasks = await GetTasks();

    console.log(tasks);

    setItems(tasks);
  }

  useEffect(() => {
    GetAllTasksHandler();
  }, []);

  return (
    <>
      <Container>
        <View style={{flex: 1}}>
          <View style={{padding: 15}}>
            <FlatList
              data={items}
              keyExtractor={item => item._id}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: '#D9D9D9'}} />
              )}
              renderItem={({item, index}) => (
                <TaskListItem
                  item={{
                    name: item.name,
                    description: item.description,
                  }}
                />
              )}
            />
          </View>
        </View>
      </Container>
      <FAB
        visible={!modalVisible}
        placement="right"
        icon={{name: 'add', color: 'white'}}
        color="#1A84BF"
        onPress={() => setModalVisible(true)}
      />
      <ModalAddTask visible={modalVisible} setVisible={setModalVisible} />
    </>
  );
}
