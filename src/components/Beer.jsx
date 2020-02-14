import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){
  const numberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    borderStyle: 'none',
    borderRadius: '50%',
    background: '#808080',
    background: '-webkit-linear-gradient(to right, #808080, #3fada8)',
    background: 'linear-gradient(to right, #808080, #3fada8)',
    padding: "4%"
  }

  const nameStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    paddingRight: '5px'
  }

return (
  <div>
    <div>
      <span style={numberStyle}>{props.number}</span>
      <span style={nameStyle}>{props.name}</span>
      <span>{props.brewer}</span>
      <span>{props.beerType}</span>
      <span>{props.location}</span>
      <span>{props.percentage}</span>
      <span>{props.ounces}</span>
      <span>{props.price}</span>
    </div>
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
