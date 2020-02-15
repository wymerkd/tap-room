import React from "react";
import Beer from "./Beer";

const beerListTwoStyles = {
  paddingTop: '100px'
}

const allBeers = [
  {
    number: "6",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "7",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "8",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "9",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "10",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "11",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  },
  {
    number: "12",
    name: "Men's Room",
    brewer: "Elysian",
    beerType: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  }
];

function BeerListTwo() {
  return (
    <div style={beerListTwoStyles}>
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

export default BeerListTwo;
