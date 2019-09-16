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
    }, 2000);
  }

  handleAge = () => {
    let age = this.state.age;

    this.setState({ age: age + 1 });
  }

  render() {
    return (
      <>
        <label>Hi, this is ReactDom</label> <br /> <br />
        <label>This is my Age: {this.state.age}</label> <br /> <br />
        <label>This is my Status: {this.state.status}</label> <br /> <br />

        <button onClick={this.handleAge}>Make me Old!</button>
      </>
    )
  }
}