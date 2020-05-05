import React from "react";
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const Dashboard = ({groups})=>(
  <div>
    <ConnectedNavigation/>
      <div className="row">
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
      </div>
    <ConnectedFooter/>
  </div>
);

function mapStateToProps(state) {
  return {
    groups:state.groups
  }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
