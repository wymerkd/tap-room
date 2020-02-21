import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {BeerContext} from './BeerContext';

const NavLinks = () => {
  const [beers, setBeers] = useContext(BeerContext);
  const navLinkStyles = {
    paddingRight: '15px',
    textDecoration: 'none',
    fontSize: '24px',
    color: '#FAFAFA',
    display: 'inline'
  }
  return(
    <div>
      <Link style={navLinkStyles} to="/">Home</Link>
      <Link style={navLinkStyles} to="/newbeer">New Beer</Link>
      <p style={navLinkStyles}>Available Beers: {beers.length}</p>
    </div>
  );
}

export default NavLinks;
