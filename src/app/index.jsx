import { store } from "./store";
import React from 'react';
import ReactDom from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import './fonts/FuturaPTBook.otf';
import { Main }     from './components/Main';
// import { Landing }  from './components/Landing';

/* Add all FontAwesome icons to be used here after `fab`*/
library.add(
  fab,
  faUser
);

ReactDom.render(
  /*/ < Landing />,*/
  < Main />,
  document.getElementById("app")
);
