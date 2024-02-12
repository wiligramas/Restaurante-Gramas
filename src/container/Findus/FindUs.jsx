import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Ache-nos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Luanda, Viana Capalanga, Rua Direita Dos Postos de Alta Tensão</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horário de funcionamento</p>
        <p className="p__opensans">2a. a 6a: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sábado - Dom: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visite-Nos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
