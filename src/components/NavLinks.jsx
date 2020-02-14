import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks(){
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/newbeer">New Beer</Link>
    </div>
  );
}

export default NavLinks;
