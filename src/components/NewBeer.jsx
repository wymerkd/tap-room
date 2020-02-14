import React from 'react';
import Header from './Header';
import NewBeerForm from './NewBeerForm';


function NewBeer() {
  return(
    <div>
      <Header/>
      <Link to="/newbeerform">Add New Beer</Link>
    </div>
  );
}

export default NewBeer;
