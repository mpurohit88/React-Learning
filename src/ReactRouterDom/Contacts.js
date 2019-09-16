import React from 'react';
import { Link, Route } from 'react-router-dom';

function Contacts({ match, location, history }) {

  console.log("match....", match);
  console.log("location....", location);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Child Component {match.params.number}</h2>
      </header>
    </div>
  );
}

export default Contacts;
