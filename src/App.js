
import './App.css';
import React, { Component } from 'react';
import { Home } from './Home/Home'
import { Info } from './Info/Info'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/hero/:id' component={Info}>

          </Route>
          <Route path='/' component={Home}>

          </Route>

        </Switch>
      </div>
    );
  }

}
export default App;


