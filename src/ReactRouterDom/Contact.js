import React from 'react';
import { Link, Route } from 'react-router-dom';

import Contacts from './Contacts';

function Contact({ match, location, history }) {

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
        <Route path={`${match.url}/:number`} component={Contacts} />
      </header>
    </div>
  );
}

export default Contact;
