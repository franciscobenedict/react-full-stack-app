import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=> (
  <div className="fixed-bottom">
    <footer>
      <div className="container">
        <div className="footer_content_holder">
          <div className="footer_content">
            <div className="copyright">Copyright &copy; 2020 | The Duchess App</div>
            <div className="footer_links">
              <ul>
                <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export const ConnectedFooter = connect(state=>state)(Footer);
