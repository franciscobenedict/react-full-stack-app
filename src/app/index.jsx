import { store } from "./store";

console.log(store.getState());

import React from 'react';
import ReactDom from 'react-dom';
//import { Dashboard } from './components/Dashboard';
import './styles.scss';

import { Main } from './components/Main';

ReactDom.render(
  < Main />,
  document.getElementById("app")
);
