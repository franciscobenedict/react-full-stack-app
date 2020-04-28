import { connect } from 'react-redux';
import React from 'react';

const Footer = ()=> (
  <div>
    <footer>Copyright &copy; 2020 | Cisco's App |  ...</footer>
  </div>
);

export const ConnectedFooter = connect(state=>state)(Footer);
