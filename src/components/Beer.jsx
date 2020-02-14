import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){
return (
  <div>
    <span>{props.number}</span>
    <span>{props.name}</span>
    <span>{props.brewer}</span>
    <span>{props.beerType}</span>
    <span>{props.location}</span>
    <span>{props.percentage}</span>
    <span>{props.ounces}</span>
    <span>{props.price}</span>
  </div>
  );
}

Beer.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  beerType: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  ounces: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Beer;
