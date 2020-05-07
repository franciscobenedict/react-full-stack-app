import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../store/history';
// import { ConnectedNavigation } from './Navigation';
// import { ConnectedFooter } from './Footer';
import { ConnectedHome } from './Home';
import { ConnectedHomeLoggedInUser } from './HomeLoggedInUser';
import { ConnectedAbout } from './About';
import { ConnectedLogin } from './Login';
import { ConnectedLogout } from './Logout';
import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetail } from './TaskDetail';
import { ConnectedUserSettings } from './UserSettings';
import { ConnectedTermsAndConditions } from './termsandconditions';
import { ConnectedPrivacyPolicy } from './privacypolicy';
import { ConnectedLandingPage } from './LandingPage';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

// const localStorageToken = localStorage.getItem('localToken');
// console.log('localStorage.getItem(\'authenticatedUser\')', localStorage.getItem('authenticatedUser'));
// console.log('localStorage.getItem(\'localToken\')', localStorage.getItem('localToken'));
const routeGuard = Component => ({match})=> {
  // console.info("Route guard", match);
  if (localStorage.getItem('authenticatedUser') !== "AUTHENTICATED") {
  // if (!localStorage.getItem('localToken')) {
    // Reroute
    /*return < Redirect to="/Login" />;*/
    return < Redirect to="/" />;
  } else {
    //
    // localStorageToken;
    // localStorage.getItem('username');

    return (
      < Component match={match} />
    )
  }
}

export const Main = ()=> (
  <Router history={ history } >
    <Provider store={ store }>
      <div className="root">

        <Route
          exact
          path="/"
          component={ ConnectedLandingPage }
        />

        <Route
          exact
          path="/mainhome"
          component={ ConnectedHome }
        />

        <Route
          exact
          path="/home"
          render={ routeGuard(ConnectedHomeLoggedInUser) }
        />

        <Route
          exact
          path="/about"
          component={ ConnectedAbout }
        />

        <Route
          exact
          path="/Login"
          component={ ConnectedLogin }
        />

        <Route
          exact
          path="/dashboard"
          render={ routeGuard(ConnectedDashboard) }
          // render={()=>(<ConnectedDashboard/>)}
        />

        <Route
          exact
          path="/task/:id"
          render={ routeGuard(ConnectTaskDetail) }
          // render={({match})=>(<ConnectTaskDetail match={match} />)}
        />

        <Route
          exact
          path="/usersettings"
          render={ routeGuard(ConnectedUserSettings) }
          // render={()=>(<ConnectedUserSettings/>)}
        />

        <Route
          exact
          path="/Logout"
          component={ ConnectedLogout }
        />

        <Route
          exact
          path="/termsandconditions"
          component={ ConnectedTermsAndConditions }
        />

        <Route
          exact
          path="/privacypolicy"
          component={ ConnectedPrivacyPolicy }
        />

        <ScrollUpButton ContainerClassName="__scroll_to_top"/>
      </div>
    </Provider>
  </Router>
)
