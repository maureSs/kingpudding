import React from 'react';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuList from '../components/MenuList';
import Grid from '@material-ui/core/Grid';
// images
import chocotorta from '../images/menu/chocotorta.jpg';
import muffins from '../images/menu/muffins.jpg';
import havannet from '../images/menu/havannet.jpg';
import tartaCremaDurazno from '../images/menu/tartaCremaDurazno.jpg';
import tortaOreoGanache from '../images/menu/tortaOreoGanache.jpg';
import turronDeAvena from '../images/menu/turronDeAvena.jpg';
import brownieMarmolado from '../images/menu/brownieMarmolado.jpg';
import flan from '../images/menu/flan.jpg';
// styles
import { Wrapper } from '../components/MenuList.styles';

export default function Menu() {
  return (
    <div>
      <div className='bg'>
        <Navbar />
      </div>
      <div>
        <h2 className='dessert-title'>♔ NUESTROS POSTRES ♔</h2>
        <div className='adjust-menu'>
          <MenuList />
          <Wrapper>
            <Grid
              container
              spacing={3}
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={chocotorta} alt='chocotorta' />
                <h3>Chocotorta</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={muffins} alt='muffins' />
                <h3>Muffins</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={havannet} alt='havannet' />
                <h3>Havannet</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={tartaCremaDurazno} alt='tartaCremaDurazno' />
                <h3>Tarta de crema y durazno</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={tortaOreoGanache} alt='tortaOreoGanache' />
                <h3>Torta de oreo y ganache de chocolate</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={turronDeAvena} alt='turronDeAvena' />
                <h3>Turrón de avena</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={brownieMarmolado} alt='brownieMarmolado' />
                <h3>Brownie Marmolado</h3>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img src={flan} alt='flan' />
                <h3>Flan</h3>
              </Grid>
            </Grid>
          </Wrapper>
        </div>
        <div className='coming-soon'>
          <h5 className='prox' data-text='Próximamente...'>
            Próximamente...
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
