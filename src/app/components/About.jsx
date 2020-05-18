import React from "react";
import { connect } from 'react-redux';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const About = ()=>(
  <div className="main">
    <ConnectedNavigation/>
    <div className="container-fluid">
      <h1>About The Duchess</h1>
      <p className="">The Dutchess is an internationally recognised language meaning powerful leader of high rank the reflection Barbados extended to the Caribbean has to me.</p>
      <p className="">The Dutchess was established in 2020 to design packages and services portraying the true essence of modern royalty. The company has the worked towards conceptualising the brand to discerning taste, unique designs and emotional appeal.</p>
      <p className="">An exciting and innovative brand bringing nations and personalities there own signature through travel, entertainment and culinary.</p>
    </div>
    <ConnectedFooter/>
  </div>
);

const mapStateToProps = state=>state;
export const ConnectedAbout = connect(mapStateToProps)(About);
