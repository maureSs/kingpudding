import React from 'react';
// styles
import { Wrapper } from './Breakfast.styles';
// images
import breakfast from '../images/breakfast.jpg';
import coffee from '../images/coffee.jpg';

const Breakfast = () => {
  return (
    <Wrapper>
      <h4>❱❱ Desayuno personalizado ❰❰</h4>
      <div className='breakfast-container'>
        <img className='coffee-style' src={coffee} alt='coffee' />
        <img src={breakfast} alt='breakfast' />
        <p>
          <em> ∼ Incluye ∼ </em> <br />
          <br />
          2 Medialunas <br />
          2 Muffins caseros <br />
          Porción de Budín casero <br />
          Porción de Brownie casero <br />
          2 cookies de manteca <br />
          2 bombones <br />
          Bizcochitos salados <br />
          <br />
          Variedades de Té, Mate Cocido <br />
          Café <br />
          Jugo de Naranja/Manzana/Multifruta <br />
          <br />
          <i>∼∼∼∼∼∼</i>
          <br />
          <br />
          Todo envuelto en celofán con moño y tarjeta que podes dedicar.
        </p>
      </div>
      <h6 className='final-quote'>
        <i>Un mimo para empezar el día de la mejor manera</i>
      </h6>
    </Wrapper>
  );
};

export default Breakfast;
