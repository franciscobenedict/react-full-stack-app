import { store } from "./store";

console.log(store.getState());

import React from 'react';
import ReactDom from 'react-dom';
//import { Dashboard } from './components/Dashboard';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
// library.add(fab, faCheckSquare, faCoffee);

library.add(fab, faCheckSquare, faCoffee, faUser);


import './styles.scss';

import { Main } from './components/Main';

ReactDom.render(
  < Main />,
  document.getElementById("app")
);
