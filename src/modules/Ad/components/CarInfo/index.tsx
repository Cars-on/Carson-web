import React, { useState, useEffect, HTMLAttributes } from 'react';

import calendarIcon from '@/shared/assets/icons/calendar-icon.png';
import localizationIcon from '@/shared/assets/icons/localization-icon.png';
import tagIcon from '@/shared/assets/icons/tag-icon.png';

import { Container } from './styles';
import InputImages from './components/InputImages';

import car_thumb from '@/shared/assets/illustrations/thumbnail.png';

interface ICarInfoProps extends HTMLAttributes<HTMLElement> {
  photos: Array<string>;
  name: string;
  price: string;
  year: string;
  localization: string;
  model: string;
  description: string;
  userId: string;
}

const CarInfo = ({
  photos,
  name,
  price,
  year,
  localization,
  model,
  userId,
  description,
}: ICarInfoProps) => {
  const [mainPhoto, setMainPhoto] = useState(car_thumb);

  const localStorageUser =
    typeof window !== 'undefined' ? localStorage?.getItem('@crs:user') : null;
  const isUserLogged = JSON.parse(localStorageUser);
  const userIdLocalStorage = isUserLogged?.id;

  const ownerIsLogged = userId === userIdLocalStorage;

  useEffect(() => {
    if (photos?.length) {
      setMainPhoto(photos[0]);
      return;
    }
    setMainPhoto(car_thumb);
  }, photos);

  return (
    <Container>
      <div className="images">
        <div className="main-image">
          <img src={mainPhoto} alt="" />
        </div>
        <div className="abc-images">
          {photos?.map(photo => (
            <img
              src={photo}
              onClick={() => {
                setMainPhoto(photo);
              }}
              alt=""
            />
          ))}
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

        {ownerIsLogged && <InputImages />}
      </div>
    </Container>
  );
};

export default CarInfo;
