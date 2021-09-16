import React, { HTMLAttributes } from 'react';

import calendarIcon from '@/shared/assets/icons/calendar-icon.png';
import localizationIcon from '@/shared/assets/icons/localization-icon.png';
import tagIcon from '@/shared/assets/icons/tag-icon.png';

import { Container } from './styles';

interface ICarInfoProps extends HTMLAttributes<HTMLElement> {
  mainImage: string;
  imgA: string;
  imgB: string;
  imgC: string;
  name: string;
  price: string;
  year: string;
  localization: string;
  model: string;
  description: string;
}

const CarInfo = ({
  mainImage,
  imgA,
  imgB,
  imgC,
  name,
  price,
  year,
  localization,
  model,
  description,
}: ICarInfoProps) => {
  return (
    <Container>
      <div className="images">
        <div className="main-image">
          <img src={mainImage} alt="" />
        </div>
        <div className="abc-images">
          <img src={imgA} alt="" />
          <img src={imgB} alt="" />
          <img src={imgC} alt="" />
        </div>
      </div>
      <div className="details">
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>
          <img src={calendarIcon} alt="Icone ano do carro" />
          {year}
        </p>
        <p>
          <img src={localizationIcon} alt="Icone de localização" />
          {localization}
        </p>
        <p>
          <img src={tagIcon} alt="Icone do modelo do carro" />
          {model}
        </p>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default CarInfo;
