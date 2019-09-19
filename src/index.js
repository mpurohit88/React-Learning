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
import Chats from './GetSnapshotBeforeUpdate';
import ReactDom from './ReactDom';
import DynamicElement from './DynamicElement';
import Header from './Header';
import ReactRouterDom from './ReactRouterDom';
import Counter from './ReactReduxExercise';

import * as serviceWorker from './serviceWorker';
// import { compose, createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './ReactRedux/reducers';
// import store from './ReactRedux/store';
// import ReactRedux from './ReactRedux';

import { Provider } from 'react-redux';
import store from './ReactReduxExercise/store';

ReactDOM.render(
  <Provider store={store}><Counter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

