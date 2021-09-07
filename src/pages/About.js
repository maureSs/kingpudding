import React from 'react';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// styles
import { Wrapper } from '../components/About.styles';

export default function About() {
  return (
    <div>
      <div className='bg'>
        <Navbar />
      </div>
      <Wrapper>
        <div className='about-title-container'>
          <h3 title='Sobre kingpudding'>Sobre kingpudding</h3>
        </div>
        <div className='about-container'>
          <div className='about-section'>
            <h5>⇝Comienzos⇜</h5>
            <br />
            <p className='text-design'>
              kingpudding nace en 2017 como un emprendimiento / hobbie de la
              mano de la pastelera estrella Fabiana Rey 🌟
            </p>
            <br /> <br />
            <h5>⇝Actualidad⇜</h5>
            <br />
            <p className='text-design'>
              Actualmente kingpudding es un hobbie, aún así hay disponibilidad y
              muchas ganas de cocinar!
            </p>
            <br /> <br />
            <h5>⇝kingpudding y su pastelería⇜</h5>
            <br />
            <p className='text-design'>
              kingpudding es en esencia la combinación de años de pasteleria y
              amor por esta misma. Desde Budines, Muffins, tartas variadas,
              Brownies y más, para hacer tus meriendas más completas y
              divertidas, hasta tortas como Chajá, Cheesecake, Havannet,
              Chocotorta y mucho más, para cumpleaños, casamientos y/o cualquier
              tipo de evento.
            </p>
            <br /> <br />
            <h5>⇝Como contactarnos⇜</h5>
            <br />
            <p className='text-design'>
              Si queres saber más podes contactarnos en nuestras redes de
              Facebook o Instagram. También podes mandarnos un email.
            </p>
            <br /> <br />
            <p className='text-design'>
              Localización: Buenos Aires, Zona Norte.
            </p>
          </div>
        </div>
      </Wrapper>

      <Footer />
    </div>
  );
}
