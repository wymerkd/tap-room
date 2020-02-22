import React, {useState, useContext} from 'react';
import Header from './Header';
import {BeerContext} from './BeerContext';
import BeerList from './BeerList'

const NewBeerForm = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [brewer, setBrewer] = useState('')
  const [beerType, setBeerType] = useState('')
  const [location, setLocation] = useState('')
  const [percentage, setPercentage] = useState('')
  const [ounces, setOunces] = useState('')
  const [price, setPrice] = useState('')
  const [beers, setBeers] = useContext(BeerContext);

  const updateNumber = (e) => {
    setNumber(e.target.value)
  }
  const updateName = (e) => {
    setName(e.target.value)
  }
  const updateBrewer = (e) => {
    setBrewer(e.target.value)
  }
  const updateBeerType = (e) => {
    setBeerType(e.target.value)
  }
  const updateLocation = (e) => {
    setLocation(e.target.value)
  }
  const updatePercentage = (e) => {
    setPercentage(e.target.value)
  }
  const updateOunces = (e) => {
    setOunces(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addBeer = e => {
    e.preventDefault();
    setBeers(prevBeers => [...prevBeers, {number: number, name: name, brewer: brewer, beerType: beerType, location: location, percentage: percentage, ounces: ounces, price: price}])
  }


  return(
    <div>
      <div>
        <BeerList/>
        <form onSubmit={addBeer}>
         <input
           type="text"
           id="number"
           placeholder="Number"
           value={number}
           onChange={updateNumber}/>
         <br/>
         <input
           type="text"
           id="name"
           placeholder="Beer Name"
           value={name}
           onChange={updateName}/>
         <br/>
         <input
           type="text"
           id="brewer"
           placeholder="Brewer"
           value={brewer}
           onChange={updateBrewer}/>
         <br/>
         <input
           type="text"
           id="beerType"
           placeholder="Beer Type"
           value={beerType}
           onChange={updateBeerType}/>
         <br/>
         <input
           type="text"
           id="location"
           placeholder="Brewer Location"
           value={location}
           onChange={updateLocation}/>
         <br/>
         <input
           type="text"
           id="percentage"
           placeholder="Alcohol Percentage"
           value={percentage}
           onChange={updatePercentage}/>
         <br/>
          <input
            type="text"
            id="ounces"
            placeholder="Ounces"
            value={ounces}
            onChange={updateOunces}/>
          <br/>
          <input
            type="text"
            id="price"
            placeholder="Price"
            value={price}
            onChange={updatePrice}/>
          <br/>
         <button type='submit'>Add Beer!</button>
       </form>
     </div>
    </div>
  );
}

export default NewBeerForm;
