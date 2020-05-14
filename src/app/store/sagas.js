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
  // console.log('====//====> SAGA TO REMOVE A TASK');
  while (true) {
    // const task = yield take([
    //   mutations.REMOVE_TASK
    // ]);
    const task = yield take(mutations.REMOVE_TASK);
    console.log("====//====> { taskID } ", task );
    try {
      const response = axios.delete(url + `/task/remove`, {
        task: {
          id: task.taskID
        }
      });
      console.log("====//====> Remove task:", response);
      history.push('/dashboard');
    } catch (e) {
      console.log("====//====> Unable to remove task:", e);
      history.push('/home');
    }
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
      // console.log("username:", username);
      yield put(mutations.setState(data.state));
      yield put(mutations.processingAuthenticateUser(mutations.AUTHENTICATED));

      // - Save the JWT in localStorage
      localStorage.setItem('localToken', data.token);
      localStorage.setItem('username', username);
      localStorage.setItem('authenticatedUser', data.state.session.authenticated);
      const newState = JSON.stringify(data.state);
      // console.log('====> ', newState);
      localStorage.setItem('localState', newState);

      // history.push('/dashboard');
      history.push('/home');
    } catch (e) {
      console.log("Can't authenticate");
      yield put(mutations.processingAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
