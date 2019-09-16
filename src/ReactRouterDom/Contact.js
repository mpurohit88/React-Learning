import React from 'react';
import { Link, Route } from 'react-router-dom';

function Contact({ match, location, history }) {

  console.log("match....", match);
  console.log("location....", location);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            [...Array(5).keys()].map(n => {
              return <li><Link to={`${match.url}/${n + 1}`}>{`Contact ${n + 1}`}</Link></li>
            })
          }
        </ul>
        <Route path={`${match.url}/:number`} />
      </header>
    </div>
  );
}

export default Contact;
