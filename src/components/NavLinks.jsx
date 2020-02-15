import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks(){
  const navLinkStyles = {
    paddingRight: '15px',
    textDecoration: 'none',
    fontSize: '24px',
    color: '#FAFAFA'
  }
  return(
    <div>
      <Link style={navLinkStyles} to="/">Home</Link>
      <Link style={navLinkStyles} to="/newbeer">New Beer</Link>
    </div>
  );
}

export default NavLinks;
