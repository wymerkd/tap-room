import React from 'react';
import Header from './Header';

function NewBeerForm() {
  return(
    <div>
      <div>
        <form>
         <input
           type="text"
           id="number"
           placeholder="Number"/>
         <br/>
         <input
           type="text"
           id="name"
           placeholder="Beer Name"/>
         <br/>
         <input
           type="text"
           id="brewer"
           placeholder="Brewer"/>
         <br/>
         <input
           type="text"
           id="beerType"
           placeholder="Beer Type"/>
         <br/>
         <input
           type="text"
           id="location"
           placeholder="Brewer Location"/>
         <br/>
         <input
           type="text"
           id="percentage"
           placeholder="Alcohol Percentage"/>
         <br/>
          <input
            type="text"
            id="ounces"
            placeholder="Ounces"/>
          <br/>
          <input
            type="text"
            id="price"
            placeholder="Price"/>
          <br/>
         <button type='submit'>Add Beer!</button>
       </form>
     </div>
    </div>
  );
}

export default NewBeerForm;
