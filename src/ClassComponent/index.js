import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import Heading from './Heading';

class index extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }

    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter() {
    console.log("Clicked..", this.state.counter);

    let counter = this.state.counter;
    counter = counter + 1;

    this.setState({ counter: counter });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is <code>Class Component</code>.
        </p>
          <input type="button" value="Counter: " id="counter" onClick={this.handleCounter} />
          {/* <h1>{this.state.counter}</h1> */}

          <Heading counter={this.state.counter} counter1={this.state.counter} />
        </header>
      </div>
    );
  }
}

export default index;
