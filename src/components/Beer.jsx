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
    padding: '30px 35px 30px 35px'
  }

  const beerPropStyles = {
    border: 'solid',
    width: '500px',
    height: '110px',
    marginLeft: '40px',
    backgroundColor: '#4F5B72'
  }

  const numberPosition = {
    float: 'left',
    paddingTop: '30px',
    paddingLeft: '10px'
  }

  const beerInfoPosition = {
    paddingLeft: '95px'
  }

  const nameStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    paddingRight: '5px',
    color: '#FAFAFA'
  }

  const brewerStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    color: '#92CDE2',
  }

  const beerTypeStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    color: '#A3A39F'
  }

  const locationStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#A3A39F'
  }

  const percentageStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#A3A39F'
  }

  const ounceStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#A3A39F'
  }

  const priceStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    color: '#A3A39F'
  }

return (
  <div>
    <div style={beerPropStyles}>
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
        <span style={percentageStyle}>{props.percentage}</span>
        <span style={ounceStyle}>{props.ounces}</span>
        <span style={priceStyle}>{props.price}</span>
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
