import {FAB} from '@rneui/base';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import ModalAddTask from '../../components/ModalAddTask';
import TaskListItem from '../../components/TaskListItem';
import Container from '../../layout/Container';
import {Task} from '../../models/Task';
import {TaskRealmContext} from '../../models';

const {useQuery, useRealm} = TaskRealmContext;

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);

  const realm = useRealm();

  const result = useQuery(Task);

  const tasks = useMemo(() => result.sorted('createdAt'), [result]);

  const handleDeleteTask = useCallback(
    task => {
      realm.write(() => {
        realm.delete(task);
      });
    },
    [realm],
  );

  const handleAddTask = useCallback(
    (name, description) => {
      console.log(`handleTask ${(name, description)}`);

      realm.write(() => {
        realm.create('Task', Task.generate(name, description));
      });
    },
    [realm],
  );

  const handleToggleTaskStatus = useCallback(
    task => {
      realm.write(() => {
        task.status = task.status === 'open' ? 'completed' : 'open';
      });
    },
    [realm],
  );

  return (
    <>
      <Container>
        <View style={{flex: 1}}>
          <View style={{padding: 15}}>
            <FlatList
              data={tasks}
              keyExtractor={item => item._id.toString()}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: '#D9D9D9'}} />
              )}
              renderItem={({item, index}) => (
                <TaskListItem
                  item={{
                    name: item.name,
                    description: item.description,
                    status: item.status,
                  }}
                  onToggleStatus={() => handleToggleTaskStatus(item)}
                  onDelete={() => handleDeleteTask(item)}
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
      <ModalAddTask
        visible={modalVisible}
        setVisible={setModalVisible}
        onSubmit={handleAddTask}
      />
    </>
  );
}
