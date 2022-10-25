import {Realm} from '@realm/react';

export class Task extends Realm.Object {
  static generate(name, description) {
    console.log('task:', {description, name});
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      description,
      createdAt: new Date(),
      status: 'open',
    };
  }

  static schema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      name: 'string',
      status: 'string',
      createdAt: 'date',
      description: 'string',
    },
    primaryKey: '_id',
  };
}
