import React from "react";
import { connect } from 'react-redux';
import bird from '../images/bird.png';
import { ConnectedNavigation } from './Navigation';
import { ConnectedFooter } from './Footer';

export const Home = ()=>(
  <div className="main">
    <ConnectedNavigation/>
      <div className="container-fluid">
        <h1>Welcome</h1>      
        <p className="">I would like to introduce to you The Dutchess.</p>
        <p className="">The origin of The Dutchess is to provide an avenue to live lavishly and affordably through travelling to the Caribbean.</p>
        <p className="">In this pandemic we must learn to adapt in this changing world in finding ways to sustain our normal way of life. The Dutchess has been conceptualized to do just that, providing all inclusive event holiday packages that will be unforgettable and affordable. This initiation will not only generate revenue it will also diversify travel experience. Surrounded by an amazing network, creative expansion ideas and the love for my home Barbados.</p>
        <p className="">With your assistance from the recognition of immediate contingencies together we will be in the mist of countries providing a normality.</p>
      </div>
    <ConnectedFooter/>
  </div>
);

const mapStateToProps = state=>state;
export const ConnectedHome = connect(mapStateToProps)(Home);
