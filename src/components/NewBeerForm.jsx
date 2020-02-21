import React, {useState, useContext} from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props) {
  let _number = null;
  let _name = null;
  let _brewer = null;
  let _beerType = null;
  let _location = null;
  let _percentage = null;
  let _ounces = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({number: _number.value, name: _name.value, brewer: _brewer.value, beerType: _beerType.value, location: _location.value, percentage: _percentage.value, ounces: _ounces.value, price: _price.value});
    _number.value ='';
    _name.value ='';
    _brewer.value ='';
    _beerType.value ='';
    _location.value ='';
    _percentage.value ='';
    _ounces.value ='';
    _price.value ='';
  }

  return(
    <div>
      <div>
        <form onSubmit={handleNewBeerFormSubmission}>
         <input
           type="text"
           id="number"
           placeholder="Number"
           ref={(input) => {_number = input;}}/>
         <br/>
         <input
           type="text"
           id="name"
           placeholder="Beer Name"
           ref={(input) => {_name = input;}}/>
         <br/>
         <input
           type="text"
           id="brewer"
           placeholder="Brewer"
           ref={(input) => {_brewer = input;}}/>
         <br/>
         <input
           type="text"
           id="beerType"
           placeholder="Beer Type"
           ref={(input) => {_beerType = input;}}/>
         <br/>
         <input
           type="text"
           id="location"
           placeholder="Brewer Location"
           ref={(input) => {_location = input;}}/>
         <br/>
         <input
           type="text"
           id="percentage"
           placeholder="Alcohol Percentage"
           ref={(input) => {_percentage= input;}}/>
         <br/>
          <input
            type="text"
            id="ounces"
            placeholder="Ounces"
            ref={(input) => {_ounces = input;}}/>
          <br/>
          <input
            type="text"
            id="price"
            placeholder="Price"
            ref={(input) => {_price = input;}}/>
          <br/>
         <button type='submit'>Add Beer!</button>
       </form>
     </div>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
