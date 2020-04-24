import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';
import { ConnectedHome } from './Home';
import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetail } from './TaskDetail';

export const Main = ()=> (
  <Router history={history}>
    <Provider store={store}>
      <div>
        < ConnectedNavigation />

        <Route
          exact
          path="/"
          render={()=>(<ConnectedHome/>)}
        />

        <Route
          exact
          path="/dashboard"
          render={()=>(<ConnectedDashboard/>)}
        />

        <Route
          exact
          path="/task/:id"
          render={({match})=>(<ConnectTaskDetail match={match} />)}
        />

        <ConnectedFooter />
      </div>
    </Provider>
  </Router>
)
