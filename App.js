import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import { render } from 'react-dom';
import Login from './Login';
import Event from './Event';
import Stats from './Stats'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login } />
        <Route exact path='/Event' component={Event } />
        <Route exact path='/Stats' component={Stats} />
      </Switch>

    </Router>
  );
}

export default App;