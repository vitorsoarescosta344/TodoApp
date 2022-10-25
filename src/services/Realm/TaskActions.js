import Realm from 'realm';
import uuid from 'react-native-uuid';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    status: 'string',
    description: 'string',
  },
  primaryKey: '_id',
};

export async function CreateTask({task}) {
  const realm = await Realm.open({
    path: 'taskapp',
    schema: [TaskSchema],
  });

  realm.write(() => {
    realm.create('Task', {
      _id: uuid.v4(),
      name: task.name,
      status: 'open',
      description: task.description,
    });
  });
}

export async function GetTasks() {
  const realm = await Realm.open({
    path: 'taskapp',
    schema: [TaskSchema],
  });

  const tasks = realm.objects('Task');

  console.log('Tasks' + tasks);

  return tasks;
}

export async function UpdateTask({index}) {
  const realm = await Realm.open({
    path: 'taskapp',
    schema: [TaskSchema],
  });

  const task = realm.objects('Task')[index];

  console.log('taskfilter', task);

  realm.write(() => {
    task.status = 'completed';
  });

  realm.close();
}

export async function DeleteTask({index}) {
  const realm = await Realm.open({
    path: 'taskapp',
    schema: [TaskSchema],
  });

  const task = realm.objects('Task')[index];

  realm.write(() => {
    realm.delete(task);
  });

  realm.close();
}
