import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Header from './Header';
import BeerList from './BeerList';
import BeerListTwo from './BeerListTwo';
import EventsList from './EventsList';
import {BeerProvider} from './BeerContext';


function Home() {
  return(
    <BeerProvider>
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Row>
            <Col span={6}><BeerList/></Col>
            <Col span={6}><BeerListTwo/></Col>
          </Row>
        </div>
        <div>
          <EventsList/>
        </div>
      </div>
  </BeerProvider>
  );
}

export default Home;
