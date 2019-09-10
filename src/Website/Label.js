import React from 'react';

export default function Label(props) {
  return <label className="color"><h1>{props.text}</h1>{props.children}</label>
}