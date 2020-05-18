import React from "react";
import { connect } from 'react-redux';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const Flights = ()=>(
  <div className="main">
    <ConnectedNavigation/>
    <div className="container-fluid">
      <h1>Flights</h1>
      <p className="">Flying with us you will be privileged to a memorable experience as we are using luxury jets with a comfortable seating of 154 seats.</p>
      <p className="">Added with full premium service, entertainment with delicious Caribbean cuisine and flowing unique cocktails.</p>
    </div>
    <ConnectedFooter/>
  </div>
);

const mapStateToProps = state=>state;
export const ConnectedFlights = connect(mapStateToProps)(Flights);
