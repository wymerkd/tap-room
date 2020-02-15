import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Header from './Header';
import BeerList from './BeerList';
import BeerListTwo from './BeerListTwo';
import EventsList from './EventsList';
import InstagramEmbed from 'react-instagram-embed';

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
      <div>
        <EventsList/>
      </div>
      <InstagramEmbed
        url='https://www.instagram.com/p/B1RfqPHgi_e/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default Home;
