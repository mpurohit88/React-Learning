import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import ChildComponent from './childComponent';

function index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChildComponent componentType="Functional Component" />
      </header>
    </div>
  );
}

export default index;
