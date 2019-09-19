import React from 'react';

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
