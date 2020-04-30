import { connect } from 'react-redux';
import React from 'react';

const Footer = ()=> (
  <div className="fixed-bottom">
    <footer>Copyright &copy; 2020 | The Duchess App </footer>
  </div>
);

export const ConnectedFooter = connect(state=>state)(Footer);
