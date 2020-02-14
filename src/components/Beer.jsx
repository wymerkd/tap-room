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
    padding: '25px'
  }

  const numberPosition = {
    float: 'left',
    paddingTop: '30px'
  }

  const beerInfoPosition = {
    paddingLeft: '65px',
    border: 'solid',
  }

  const nameStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    paddingRight: '5px',
  }

  const brewerStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
  }

  const beerTypeStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
  }

  const locationStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
  }

return (
  <div>
    <div>
      <div style={numberPosition}>
        <span style={numberStyle}>{props.number}</span>
      </div>
      <div style={beerInfoPosition}>
        <span style={nameStyle}>{props.name}</span>
        <span style={brewerStyle}>{props.brewer}</span>
        <br></br>
        <span style={beerTypeStyle}>{props.beerType}</span>
        <br></br>
        <span style={locationStyle}>{props.location}</span>
        <span>{props.percentage}</span>
        <span>{props.ounces}</span>
        <span>{props.price}</span>
      </div>
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
