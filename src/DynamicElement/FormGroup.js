import React from 'react';

import Form from 'react-bootstrap/Form';

export default function FormGroup({ label, placeholder, handleInputChange, id }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="input" placeholder={placeholder} onChange={handleInputChange} />
    </Form.Group>
  )
}