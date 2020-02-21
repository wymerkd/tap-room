import React,{useState, useContext} from "react";
import Beer from "./Beer";
import {BeerContext} from "./BeerContext"

const BeerList = (props) => {
  const [beers, setBeers]= useContext(BeerContext);

  const beerListStyles = {
    paddingTop: '100px'
  }

return(
  <div style={beerListStyles}>
    {beers.map(beer => (
      <Beer
         number={beer.number}
         name={beer.name}
         brewer={beer.brewer}
         beerType={beer.beerType}
         location={beer.location}
         percentage={beer.percentage}
         ounces={beer.ounces}
         price={beer.price}
         key={beer.id}
       />
    ))}
  </div>
  );
};
// function BeerList() {
//   return (
//     <div style={beerListStyles}>
//       {allBeers.map((givenBeer, index) => (
//         <Beer
//           number={givenBeer.number}
//           name={givenBeer.name}
//           brewer={givenBeer.brewer}
//           beerType={givenBeer.beerType}
//           location={givenBeer.location}
//           percentage={givenBeer.percentage}
//           ounces={givenBeer.ounces}
//           price={givenBeer.price}
//           key={index}
//         />
//       ))}
//     </div>
//   );
// }

export default BeerList;
