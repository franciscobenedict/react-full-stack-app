import React from "react";
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

const storedState = localStorage.getItem('localState');
const myState = JSON.parse(storedState);
console.log('myState', myState);


export const Dashboard = ({groups})=> {



  return (
    <div>
      <ConnectedNavigation/>


      <div>
      {
        myState.groups.map(group=>(
          <ConnectedTaskList
            key={group.id}
            id={group.id}
            name={group.name}
            className="col-sm col-12"
          />
        ))
      }
      </div>

      <hr />

      <div><div>myState:-</div>
      {
        JSON.stringify(myState)
      }
      </div>

      <hr />

      {
        groups.map(group=>(
          <ConnectedTaskList
            key={group.id}
            id={group.id}
            name={group.name}
            className="col-sm col-12"
          />
        ))
      }
      <ConnectedFooter/>
    </div>
  )
};

function mapStateToProps(state) {
  return { groups:state.groups }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
