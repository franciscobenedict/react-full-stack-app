import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';
import { ConnectedHome } from './Home';
import { ConnectedAbout } from './About';
import { ConnectedLogin } from './Login';
import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetail } from './TaskDetail';
import { ConnectedUserSettings } from './UserSettings';
// import { Redirect } from 'react-router';

const routeGuard = Component => ({match})=> {
  console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
    // Reroute
    return < Redirect to="/Login" />;
  } else {
    return < Component match={match} />;
  }
}

export const Main = ()=> (
  <Router history={history}>
    <Provider store={store}>
      <div className="root">
        <ConnectedNavigation/>

        <Route
          exact
          path="/"
          component={ConnectedHome}
        />

        <Route
          exact
          path="/about"
          component={ConnectedAbout}
        />

        <Route
          exact
          path="/Login"
          component={ConnectedLogin}
        />

        <Route
          exact
          path="/dashboard"
          render={routeGuard(ConnectedDashboard)}
          // render={()=>(<ConnectedDashboard/>)}
        />

        <Route
          exact
          path="/task/:id"
          render={routeGuard(ConnectTaskDetail)}
          // render={({match})=>(<ConnectTaskDetail match={match} />)}
        />

        <Route
          exact
          path="/usersettings"
          render={routeGuard(ConnectedUserSettings)}
          // render={()=>(<ConnectedUserSettings/>)}
        />

        <ConnectedFooter/>
      </div>
    </Provider>
  </Router>
)
