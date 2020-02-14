import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/newbeer' component={NewBeer}/>
        <Route path='/newbeerform' component={NewBeerForm}/>
        <Route component={Error404}/>
      </Switch>
    </div>
    </div>
  );
}

export default App;
