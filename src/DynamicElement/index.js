import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Sibling from './Sibling';

export default class DynamicElement extends React.Component {

  constructor() {
    super()

    this.state = {
      siblingCount: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSiblingChange = (e) => {
    this.setState({ siblingCount: e.target.value });
  }

  handleInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("data", this.state)

    //ApiCall(this.state);
  }

  render() {
    let elements = [];

    if (this.state.siblingCount > 0) {
      for (let i = 0; i < this.state.siblingCount; i++) {
        elements.push(<Sibling handleInputChange={this.handleInputChange} siblingCount={i} />)
      }
    }

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Sibling</Form.Label>
            <Form.Control type="input" placeholder="enter sibling value" onChange={this.handleSiblingChange} />
          </Form.Group>

          {elements}

          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    )
  }
}