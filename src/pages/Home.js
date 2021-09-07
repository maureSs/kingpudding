import React from 'react';
import { Link } from 'react-router-dom';
// components
import MenuList from '../components/MenuList';
import Breakfast from '../components/Breakfast';
// styles
import { Wrapper } from '../components/Home.styles';

const Home = () => {
  return (
    <>
      <Wrapper>
        <h4>Mirá algunos de nuestros exquisitos postres</h4>
        <MenuList />
        <div className='center-button'>
          <Link to='/menu' className='nav-item'>
            <button className='btn'>TODOS LOS POSTRES</button>
          </Link>
        </div>
      </Wrapper>
      <Breakfast />
    </>
  );
};

export default Home;
