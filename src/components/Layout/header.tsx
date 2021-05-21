/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.scss';
import logo from './logo.png';

const Header = () => {
 return (
  <header>
   <div className="row test">
      <div className="col-lg-12 text-center" >
        <img src={logo} alt='Logo' className="img-responsive header-logo"/>
      </div>
    </div>
   
  </header>
 );
};

export default Header;