import { store } from "./store"; console.log(store.getState());
import React from 'react';
import ReactDom from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { Main } from './components/Main';

library.add(fab, faCheckSquare, faCoffee, faUser);

ReactDom.render(
  < Main />,
  document.getElementById("app")
);
