import React from 'react';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Index() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}