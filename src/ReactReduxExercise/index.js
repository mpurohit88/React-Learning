import React from 'react';
import { connect } from 'react-redux';
import * as actionType from './actionType.js';

class Counter extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   count: 0
    // }
  }

  increment = () => {
    // const count = this.state.count + 1;
    // this.setState({ count });
    this.props.dispatch({ type: actionType.INCREMENT });
  }

  decrement = () => {
    // const count = this.state.count - 1;
    // this.setState({ count });
    this.props.dispatch({ type: actionType.DECREMENT });
  }

  render() {
    console.log("data", this)
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <label>{this.props.count}</label>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => {
  return { count };
};

export default connect(mapStateToProps)(Counter);
