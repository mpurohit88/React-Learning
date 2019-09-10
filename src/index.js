import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import PassingDataWithProps from './PassingDataWithProps';
import CompositionComponent from './CompositionComponent';
import StateManagement from './StateManagement';
import Website from './Website/Website';
import Clock from './LifeCycle';

import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Website />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
