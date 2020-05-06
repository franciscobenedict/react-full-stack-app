import React from "react";
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { Link } from 'react-router-dom';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const TaskList = ({tasks, name, id, isComplete, createNewTask})=>(
  <div className="row">
    <div className="p-2 col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card_holder">
        <h3 className="card_heading">{name}</h3>

        <hr className="card_divider"/>

        <div className="task_items">
          {
            tasks.map(task=>(
              <Link to={`/task/${task.id}`} key={task.id} className="task_item">
                <div className={`card p-2 mt-2 ${task.isComplete ? 'completed' : ''}`}>{task.name}</div>
              </Link>
            ))
          }
          { (tasks.length === 0) && <div className="task_item"><div className="nothing_card">There is nothing to show in this section yet!</div></div> }
        </div>

        <hr className="card_divider" />

        <div className=" col-12 col-sm-6 col-md-6 col-lg-4">
          <button className="btn btn-primary btn-block mt-2" onClick={ ()=>createNewTask(id) }>Add New</button>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps)=>{
  let groupID = ownProps.id;

  const storedState = localStorage.getItem('localState');
  const myState = JSON.parse(storedState);
  console.log('myState', myState);

  // Change `tasks:myState.tasks.filter(task=>task.group === groupID)` back to `tasks:state.tasks.filter(task=>task.group === groupID)`

  return {
    name:ownProps.name,
    id:groupID,
    tasks:myState.tasks.filter(task=>task.group === groupID)
  }
};
const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    createNewTask(id) {
      console.log("Creating new task...", id);
      dispatch(requestTaskCreation(id));
      // console.log('requestTaskCreation(id)' + requestTaskCreation(id) );
    }
  }
}
export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);
