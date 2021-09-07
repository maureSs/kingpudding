import React from 'react';
// components
import Navbar from './Navbar';
// styles
import { Wrapper } from './Header.styles';
// images
import budinHeader from '../images/budinHeader.jpg';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <img src={budinHeader} alt='budin' />
          <div className='nav-menu'>
            <Navbar />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
