import React from 'react';
import './App.css';

function Nav() {
  return (
    <div className="Nav">

      <ul className='navbar'>
        <li className='links'>Home</li>
        <li className='links'>Offers</li>
        <li className='links'>Profile</li>
        <li className='login'>LogIn</li>
        <li className='login'>SignUp</li>
      </ul>
    </div>


  );
}
export default Nav;

