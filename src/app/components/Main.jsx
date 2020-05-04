import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';
import { ConnectedHome } from './Home';
import { ConnectedHomeLoggedInUser } from './HomeLoggedInUser';
import { ConnectedAbout } from './About';
import { ConnectedLogin } from './Login';
import { ConnectedLogout } from './Logout';
import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetail } from './TaskDetail';
import { ConnectedUserSettings } from './UserSettings';
import { ConnectedTermsAndConditions} from './termsandconditions';
import { ConnectedPrivacyPolicy} from './privacypolicy';
// import { Redirect } from 'react-router';
// import ScrollUpButton from "react-scroll-up-button";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

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
  <Router history={history} >
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
          path="/home"
          component={ConnectedHomeLoggedInUser}
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

        <Route
          exact
          path="/Logout"
          component={ConnectedLogout}
        />

        <Route
          exact
          path="/termsandconditions"
          component={ConnectedTermsAndConditions}
        />

        <Route
          exact
          path="/privacypolicy"
          component={ConnectedPrivacyPolicy}
        />

        <ConnectedFooter/>
        <ScrollUpButton  ContainerClassName="__scroll_to_top"/>
      </div>
    </Provider>
  </Router>
)
