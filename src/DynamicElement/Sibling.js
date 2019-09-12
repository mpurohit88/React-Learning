import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import FormGroup from './FormGroup';

export default class Sibling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label><h1>Sibling {this.props.siblingCount}</h1></label>
        <FormGroup label="Name" placeholder="enter sibling Name" handleInputChange={this.props.handleInputChange} id={`Form.ControlInputName${this.props.siblingCount}`} />
        <FormGroup label="Age" placeholder="enter sibling Age" handleInputChange={this.props.handleInputChange} id={`Form.ControlInputAge${this.props.siblingCount}`} />
        <FormGroup label="Occupation" placeholder="enter sibling Occupation" handleInputChange={this.props.handleInputChange} id={`Form.ControlInputOcc${this.props.siblingCount}`} />
      </React.Fragment>
    )
  }
}