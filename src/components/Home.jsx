import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Header from './Header';
import BeerList from './BeerList';

function Home() {
  return(
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <BeerList/>
      </div>
    </div>
  );
}

export default Home;
