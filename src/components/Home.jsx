import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Header from './Header';
import BeerList from './BeerList';
import {BeerProvider} from './BeerContext';
import NewBeerForm from './NewBeerForm'




function Home() {
  return(
    <BeerProvider>
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <NewBeerForm/>
        </div>
      </div>
  </BeerProvider>
  );
}

export default Home;
