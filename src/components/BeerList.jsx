import React from "react";
import Beer from "./Beer";

const beerListStyles = {
  paddingTop: '100px'
}

const allBeers = [
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
];

function BeerList() {
  return (
    <div style={beerListStyles}>
      {allBeers.map((givenBeer, index) => (
        <Beer
          number={givenBeer.number}
          name={givenBeer.name}
          brewer={givenBeer.brewer}
          beerType={givenBeer.beerType}
          location={givenBeer.location}
          percentage={givenBeer.percentage}
          ounces={givenBeer.ounces}
          price={givenBeer.price}
          key={index}
        />
      ))}
    </div>
  );
}

export default BeerList;
