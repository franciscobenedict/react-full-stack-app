import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// import { taskCreationSaga } from './sagas.mock';
import { taskCreationSaga, taskModificationSaga } from './sagas';
import { createTask, requestTaskCreation} from './mutations';

// import * as sagas from './sagas.mock';
import * as sagas from './sagas';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    tasks(tasks = defaultState.tasks, action) {
      switch (action.type) {
        case mutations.CREATE_TASK:
          return [...tasks, {
            id:action.taskID,
            name:"New Task",
            group:action.groupID,
            owner:action.ownerID,
            isComplete:false
          }];
        case mutations.SET_TASK_COMPLETE:
          return tasks.map(task=>{
            return (task.id === action.taskID) ?
              {...task,isComplete:action.isComplete} :
              task;
          });
        case mutations.SET_TASK_NAME:
          return tasks.map(task=>{
            return (task.id === action.taskID) ?
              {...task,name:action.name} :
              task;
          });
        case mutations.SET_TASK_GROUP:
          return tasks.map(task=>{
            return (task.id === action.taskID) ?
              {...task,group:action.groupID} :
              task;
          });
      }
      return tasks;
    },
    comments(comments = defaultState.comments) {
      return comments;
    },
    groups(groups = defaultState.groups) {
      return groups;
    },
    users(users = defaultState.users) {
      return users;
    }
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(taskCreationSaga, taskModificationSaga);
}
