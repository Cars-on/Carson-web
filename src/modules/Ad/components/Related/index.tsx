import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IRelated extends HTMLAttributes<HTMLElement> {
  relatedA: Object;
  relatedB: Object;
  relatedC: Object;
  relatedD: Object;
  relatedE: Object;
}

const Related = ({
  relatedA,
  relatedB,
  relatedC,
  relatedD,
  relatedE,
}: IRelated) => {
  return (
    <Container>
      <div className="related">
        <div className="title-section">
          <h3>Talvez você goste também</h3>
          <h1>Carros Relacionados</h1>
        </div>
        <div className="related-cars">
          {relatedA}
          {relatedB}
          {relatedC}
          {relatedD}
          {relatedE}
        </div>
      </div>
    </Container>
  );
};

export default Related;
