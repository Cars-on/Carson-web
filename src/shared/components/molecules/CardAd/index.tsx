import React from 'react';

import { Container } from './styles';

const CardAd = () => {
  return (
    <Container>
      <img
        src="https://www.planetcarsz.com/assets/uploads/4e1cbf5036d32297aad4e320218788e3.jpg"
        alt=""
      />

      <section className="infos">
        <h1>MERCEDES-BENZ GLE 350</h1>
        <span>R$ 299.400</span>

        <section>
          <p>2017/2017</p>
          <p>87940km</p>
        </section>

        <p>Campinas - SP</p>

        <button type="button">Comprar</button>
      </section>
    </Container>
  );
};

export default CardAd;
