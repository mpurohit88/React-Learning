import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class index extends React.Component {
  constructor(props) {
    // 🔴 Can’t use `this` yet
    super(props);
    // ✅ Now it’s okay though

    this.state = {
      counter: 0
    }

    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is <code>Class Component</code>. <br />
            Counter: {this.state.counter}
          </p>
          <input type="button" onClick={this.updateCounter} value="Click" id="counter" />
        </header>
      </div>
    );
  }
}

export default index;
