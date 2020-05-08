import { store } from "./store";
import React from 'react';
import ReactDom from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faUser, faCheckSquare as fasCheckSquare, faChevronDown as fasChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons'
import './styles.scss';
import './fonts/FuturaPTBook.otf';
import { Main } from './components/Main';
// import { Landing }  from './components/Landing';

/* Add all FontAwesome icons to be used here after `fab`*/
library.add(
  fab,
  faUser,
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,

  fasCheckSquare, farCheckSquare, fasChevronDown
);

ReactDom.render(
  /*/ < Landing />,*/
  < Main />,
  document.getElementById("app")
);
