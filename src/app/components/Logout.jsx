import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LogoutComponent = ()=>(
  <div className="">
    <h1>Signed out</h1>
    <p className="">You have been signed out!</p>
    <p>To sign in, please click "<Link to="/login">Login</Link>"  the button or return to the <Link to="/">home page</Link>.</p>
  </div>
);

const mapStateToProps = state=>state;

export const ConnectedLogout = connect(mapStateToProps)(LogoutComponent);
