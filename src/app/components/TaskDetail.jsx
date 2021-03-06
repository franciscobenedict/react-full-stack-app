import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskName,
  setTaskGroup,
  removeTask
})=>(
  <div className="main">
    <ConnectedNavigation/>
    <div className="container-fluid">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="cardcol-12 col-sm-12 col-md-12 col-lg-6">
          <div>
            <input className="form-control form-control-lg" onChange={setTaskName} value={task.name} />
          </div>

          <div>
            <button className="btn btn-primary mt-2" onClick={()=> setTaskCompletion(id,!isComplete)}>{isComplete ? `Reopen` : `Complete`}</button>
          </div>

          <div className="mt-3">
            <select className="form-control" onChange={setTaskGroup} value={task.group}>
              {groups.map(group=>(
                <option key={group.id} value={group.id}>{group.name}</option>
              ))}
            </select>
          </div>

          <div className="row btn_card_task">
            <Link to="/dashboard" className="done_btn col-6">
              <button className="btn btn-primary mt-2">Done</button>
            </Link>

            <div className="remove_btn col-6">
              <button className="btn btn-primary mt-2" onClick={ ()=>removeTask(id) }>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConnectedFooter/>
  </div>
);

const mapStateToProps = (state, ownProps)=>{

  const storedState = localStorage.getItem('localState');
  const myState = JSON.parse(storedState);
  console.log('myState', myState);

    // Change `let task = myState.tasks.find(task=>task.id === id);` back to `llet task = state.tasks.find(task=>task.id === id);`
    // Change `let groups = myState.groups;` back to `let groups = state.groups;`

  let id = ownProps.match.params.id;
  let task = state.tasks.find(task=>task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  }
};

const mapDispatchToProps = (dispatch,ownProps)=>{
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id,isComplete) {
      dispatch(mutations.setTaskCompletion(id,isComplete));
    },
    setTaskGroup(e){
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e){
      dispatch(mutations.setTaskName(id, e.target.value));
    },
    removeTask(id){
      dispatch(mutations.removeTask(id));
    }
  }
}

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
