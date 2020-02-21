import React, {useState, createContext} from 'react';

export const BeerContext = createContext();

export const BeerProvider = () => {
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
  <div>

  </div>
  );
}
