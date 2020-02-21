import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import NewBeerForm from './components/NewBeerForm';
import {BeerProvider} from './components/BeerContext';

function App() {
  return (
    <BeerProvider>
      <div className="App">
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/newbeer' component={NewBeer}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </div>
    </BeerProvider>
  );
}

export default App;
