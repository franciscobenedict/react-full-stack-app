import React from "react";
import { connect } from 'react-redux';

export const UserSettings = ({groups})=>(
  <div className="row">
    <div className="col-sm col-12">
      <h2> User settings</h2>
      <p>Only logged in users can see this page</p>
    </div>
  </div>
);

const mapStateToProps = state=>state;

export const ConnectedUserSettings = connect(mapStateToProps)(UserSettings);
