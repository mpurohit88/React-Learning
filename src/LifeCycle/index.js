import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log("constructor")
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps")
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")

    return true;
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("render")

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}