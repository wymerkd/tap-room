import React from 'react';
import PropTypes from 'prop-types';
import keg from '../assets/images/keg.png';


const Beer = (props) => {
  const beerDiv = {
    fontFamily: 'helvetica'
  }

  const numberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    borderStyle: 'none',
    borderRadius: '50%',
    background: '#d1913c',
    background: '-webkit-linear-gradient(to left, #d1913c, #ffd194)',
    background: 'linear-gradient(to left, #d1913c, #ffd194)',
    padding: '30px 35px 30px 35px'
  }

  const beerPropStyles = {
    borderStyle: 'none',
    width: '620px',
    height: '115px',
    marginLeft: '40px',
    backgroundColor: '#4F5B72',
    borderRadius: '20%'
  }

  const numberPosition = {
    float: 'left',
    paddingTop: '40px',
    paddingLeft: '13px'
  }

  const beerInfoPosition = {
    paddingLeft: '110px',
    paddingTop: '8px'
  }

  const nameStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    paddingRight: '8px',
    color: '#FAFAFA'
  }

  const brewerStyle = {
    fontSize: '24px',
    textTransform: 'uppercase',
    wordSpacing: '3px',
    color: '#d1913c',
  }

  const beerTypeStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    color: '#FAFAFA'
  }

  const locationStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#FAFAFA'
  }

  const percentageStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#FAFAFA'
  }

  const ounceStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    paddingRight: '5px',
    color: '#FAFAFA'
  }

  const priceStyle = {
    fontSize: '18px',
    textTransform: 'capital',
    wordSpacing: '2px',
    color: '#FAFAFA'
  }

  const kegPosition = {
    float: 'right',
    position: 'relative',
    left: '24%',
    marginRight: '18%',
    transform: 'translate(-75%, -65%)'
  }

  const pricePosition = {
    float: 'right',
    position: 'relative',
    left: '28%',
    marginRight: '18%',
    transform: 'translate(-75%, -49%)',
    textAlign: 'center'
  }

return (
  <div style={beerDiv}>
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
        <div style={kegPosition}>
          <img src={keg} alt='keg status'/>
        </div>
        <div style={pricePosition}>
          <span style={ounceStyle}>{props.ounces}</span>
          <br></br>
          <span style={priceStyle}>{props.price}</span>
        </div>
      </div>
    </div>
    <br></br>
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
