import { connect } from 'react-redux';
import React from 'react';

const Footer = ()=> (
  <div className="fixed-bottom">
    <footer>
      <div className="container">Copyright &copy; 2020 | The Duchess App</div>
    </footer>
  </div>
);

export const ConnectedFooter = connect(state=>state)(Footer);
