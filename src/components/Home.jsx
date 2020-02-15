import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Header from './Header';
import BeerList from './BeerList';
import BeerListTwo from './BeerListTwo';

function Home() {
  return(
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
    </div>
  );
}

export default Home;
