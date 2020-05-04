import { take, put, select } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';
import { history } from './history';

const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:7772";

export function* taskCreationSaga(){
  while (true) {
    const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID));

    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskID,
        group: groupID,
        owner: ownerID,
        isComplete: false,
        name: "New task"
      }
    });
  }
}

export function* taskRemovalSaga(){
  while (true) {
    // console.log('SAGA TO REMOVE A TASK');
    const {groupID} = yield take(mutations.REMOVE_TASK);
    const ownerID = `U1`;
    const taskID = uuidv4();

    console.log('ownerID',  ownerID);
    console.log('taskID',  taskID);
    yield put(mutations.removeTask(taskID));

    const { res } = yield axios.post(url + `/task/remove`, {
      task: {
        id: taskID
      }
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    axios.post(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete
      }
    });
  }
}

export function* userAuthenticationSaga(){
  while (true) {
    const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
    try {
      const { data } = yield axios.post(url + `/authenticate`, {username,password});
      if(!data) {
        throw new Error();
      }
      console.log("Authenticated!", data);
      yield put(mutations.setState(data.state));
      yield put(mutations.processingAuthenticateUser(mutations.AUTHENTICATED));
      // history.push('/dashboard');
      history.push('/home');
    } catch (e) {
      console.log("Can't authenticate");
      yield put(mutations.processingAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
