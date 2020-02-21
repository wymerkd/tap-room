import React, {useState, useContext} from 'react';
import Header from './Header';

const NewBeerForm = () => {
  const [number, setNumber] = useState(''),
  const [name, setName] = useState(''),
  const [brewer, setBrewer = useState(''),
  const [beerType, setBeerType] = useState(''),
  const [location, setLocation] = useState(''),
  const [percentage, setPercentage] = useState(''),
  const [ounces, setOunces] = useState(''),
  const [price, setPrice] = useState(''),

  const updateNumber = (e) => {
    setNumber(e.target.value)
  }
  const updateName = (e) => {
    setNumber(e.target.value)
  }
  const updateBrewer = (e) => {
    setNumber(e.target.value)
  }
  const updateBeerType = (e) => {
    setNumber(e.target.value)
  }
  const updateLocation = (e) => {
    setNumber(e.target.value)
  }
  const updatePercentage = (e) => {
    setNumber(e.target.value)
  }
  const updateOunces = (e) => {
    setNumber(e.target.value)
  }
  const updatePrice = (e) => {
    setNumber(e.target.value)
  }


  return(
    <div>
      <div>
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
