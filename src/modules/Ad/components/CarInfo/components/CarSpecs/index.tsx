import React from 'react';
import moment from 'moment';

import calendarIcon from '@/shared/assets/icons/calendar-icon.png';
import localizationIcon from '@/shared/assets/icons/localization-icon.png';
import tagIcon from '@/shared/assets/icons/tag-icon.png';

import { Container } from './styles';

interface ICarSpecifications {
  id: string;
  brand: string;
  price: number;
  manufacturer_year: string;
  manufacturer: string;
  description: string;
  viewed: string;
  created_at: string;
}

interface ICarSpecs {
  ownerIsLogged: any;
  localization: string;
  specifications: ICarSpecifications;
}

const CarSpecs = ({
  specifications,
  ownerIsLogged,
  localization,
}: ICarSpecs) => {
  console.log(specifications);

  return (
    <Container>
      <section className="metrics">
        <h1>{specifications?.brand}</h1>

        <small>
          Publicado em{' '}
          {moment(specifications?.created_at).format('DD/MM/YYYY - h:mm a')}
        </small>

        {ownerIsLogged && (
          <small>Visualizações: {specifications?.viewed}</small>
        )}
      </section>

      <h3>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(specifications?.price)}
      </h3>

      <p>
        <img src={calendarIcon} alt="Icone ano do carro" />
        {specifications?.manufacturer_year}
      </p>

      <p>
        <img src={localizationIcon} alt="Icone de localização" />
        {localization}
      </p>

      <p>
        <img src={tagIcon} alt="Icone do modelo do carro" />
        {specifications?.manufacturer}
      </p>
      <p>{specifications?.description}</p>
    </Container>
  );
};

export default CarSpecs;
