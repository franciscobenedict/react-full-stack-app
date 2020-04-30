import React from "react";
import { connect } from 'react-redux';

export const Home = ()=>(
  <div className="main">
    <h2>Home</h2>
    <p className="red">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
);

const mapStateToProps = state=>state;

export const ConnectedHome = connect(mapStateToProps)(Home);
