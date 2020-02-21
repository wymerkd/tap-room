import React,{useState} from "react";
import Beer from "./Beer";

const BeerList = () => {
  const beerListStyles = {
    paddingTop: '100px'
  }

  const [beers, setBeers] = useState ([
  {
    number: "1",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "2",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "3",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "4",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  }
]);
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
