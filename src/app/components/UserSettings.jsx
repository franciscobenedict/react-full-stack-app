import React from "react";
import { connect } from 'react-redux';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const UserSettings = ()=>(
  <div className="main">
    <ConnectedNavigation/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm col-12">
          <h2> User settings</h2>
          <p>Only logged in users can see this page</p>
        </div>
      </div>
    </div>
    <ConnectedFooter/>
  </div>
);

const mapStateToProps = state=>state;
export const ConnectedUserSettings = connect(mapStateToProps)(UserSettings);
