import React from 'react';
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
