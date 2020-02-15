import React from 'react';
import NavLinks from './NavLinks'

function Header(){
  const headerPosition = {
    marginLeft: '40px',
    marginTop: '15px'
  }

  return(
    <div style={headerPosition}>
      <NavLinks/>
    </div>
  );
}

export default Header;
