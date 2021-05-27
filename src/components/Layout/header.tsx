/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.scss';
/* import logo from './logo.png'; */
import Logo from './Logo';

const Header = () => {
 return (
  <header>
     <div className="test">
       <div className="header-logo text-center" >
        {/* <img src={logo} alt='Logo' className="img-responsive header-logo"/> */}
        <Logo/>
      </div>
    </div>
  </header>
 );
};

export default Header;