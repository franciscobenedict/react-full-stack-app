import { store } from "./store";console.log(store.getState());
import React from 'react';
import ReactDom from 'react-dom';
//import { Dashboard } from './components/Dashboard';
//import './index.scss';
import './global';
import styles from './app.module';

import { Main } from './components/Main';

ReactDom.render(
  < Main />,
  document.getElementById("app")
);
