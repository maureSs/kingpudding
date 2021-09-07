import React from 'react';
// components
import Grid from '@material-ui/core/Grid';
// images
import budin from '../images/menu/budin.jpg';
import chaja from '../images/menu/chaja.jpg';
import cheesecakeFrutilla from '../images/menu/cheesecakeFrutilla.jpg';
import tortaDDLCremaMousseChoco from '../images/menu/tortaDDLCremaMousseChoco.jpg';
import tartaCremaChantillyFrutillas from '../images/menu/tartaCremaChantillyFrutillas.jpg';
import flanClasico from '../images/menu/flanClasico.jpg';
import tortaCremaFrutilla from '../images/menu/tortaCremaFrutilla.jpg';
import tortaCremaDDL from '../images/menu/tortaCremaDDL.jpg';
// styles
import { Wrapper } from './MenuList.styles';

const MenuList = () => (
  <Wrapper>
    <Grid container spacing={3} justifyContent='center' alignItems='center'>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={budin} alt='budin' />
        <h3>Budín con glasé de limón</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={chaja} alt='chaja' />
        <h3>Chajá</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={cheesecakeFrutilla} alt='cheesecakeFrutilla' />
        <h3>Cheesecake de frutilla</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={tortaDDLCremaMousseChoco} alt='tortaDDLCremaMousseChoco' />
        <h3>Torta de dulce de leche, crema y mousse de chocolate</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img
          src={tartaCremaChantillyFrutillas}
          alt='tartaCremaChantillyFrutillas'
        />
        <h3>Tarta de crema chantilly y frutillas</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={flanClasico} alt='flanClasico' />
        <h3>Flan clásico</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={tortaCremaFrutilla} alt='tortaCremaFrutilla' />
        <h3>Torta de crema y frutilla</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <img src={tortaCremaDDL} alt='tortaCremaDDL' />
        <h3>Torta de crema y dulce de leche</h3>
      </Grid>
    </Grid>
  </Wrapper>
);

export default MenuList;
