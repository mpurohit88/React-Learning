import React from 'react';

export default class ReactDom extends React.Component {
  constructor() {
    super();

    this.state = {
      age: 30,
      status: 0
    }

    setTimeout(() => {
      this.setState({ status: 1 });
    }, 1000);
  }

  handleAge = () => {
    let age = this.state.age;

    this.setState({ age: age + 1 });
  }

  render() {
    return (
      <React.Fragment>
        Hi, this is ReactDom <br /> <br />
        This is my Age: {this.state.age} <br /> <br />
        This is my Status: {this.state.status} <br /> <br />

        <button onClick={this.handleAge}>Make me Old!</button>
      </React.Fragment>
    )
  }
}