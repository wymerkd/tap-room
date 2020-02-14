import React from "react";
import Beer from "./Beer";

const allBeers = [
  {
    number: "1",
    name: "Men's Room",
    brewer: "Elysian",
    type: "Red Ale",
    location: "Seattle, WA",
    percentage: "5.6%",
    ounces: "16oz",
    price: "$6.00",
  }
];

function BeerList() {
  return (
    <div>
      {allBeers.map((givenBeer, index) => (
        <Beer
          number={givenBeer.number}
          name={givenBeer.name}
          brewer={givenBeer.brewer}
          type={givenBeer.type}
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
