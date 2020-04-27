import { take, put, select } from 'redux-saga/effects';
import * as mutations from './mutations';
// import uuid from 'uuid';
import {v1 as uuid} from "uuid";
// import {v2 as uuid} from "uuid";
// import {v3 as uuid} from "uuid";
// import {v4 as uuid} from "uuid";
// import {v5 as uuid} from "uuid";

export function* taskCreationSaga(){
  while (true) {
    const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuid();
    yield put(mutations.createTask(taskID, groupID, ownerID))

    console.log("Got group ID", groupID);
  }
}
