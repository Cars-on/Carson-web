import React, { HTMLAttributes, useEffect, useState } from 'react';

import Contact from './components/Contact';
import CarInfo from './components/CarInfo';
import Related from './components/Related';

import CardAd from '@/shared/components/molecules/CardAd';

import mainImageCar from '@/shared/assets/illustrations/main-image-car.png';
import imgACar from '@/shared/assets/illustrations/img-a.png';
import imgBCar from '@/shared/assets/illustrations/img-b.png';
import imgCCar from '@/shared/assets/illustrations/img-c.png';

import { Container } from './styles';
import { api } from '@/shared/providers/api';

interface IAd extends HTMLAttributes<HTMLElement> {
  id: any;
}

const Ad = ({ id }: IAd) => {
  useEffect(() => {
    async function getAdData() {
      try {
        const usersResponse = await api.get('/users');
        const response = await api.get(`/announcements/${id}`);
        setAdData(response.data);

        const users = usersResponse.data.filter(
          (user: { id: any }) => user.id === response.data.user_id,
        );

        setAdOwner(users[0]);

        console.log(users);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAdData();
  }, [id]);

  const [adData, setAdData] = useState(Object);
  const [adOwner, setAdOwner] = useState(Object);

  return (
    <Container>
      <div className="content">
        <div className="ad-info">
          <CarInfo
            mainImage={mainImageCar}
            imgA={imgACar}
            imgB={imgBCar}
            imgC={imgCCar}
            name={adData?.brand}
            price={Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(adData?.price)}
            year={adData?.brand_year}
            localization={adOwner.address}
            model={adData?.manufacturer}
            description={adData?.description}
          />
          <Contact name={adOwner.name} phone={adOwner.phone} />
        </div>
        <Related
          relatedA={<CardAd />}
          relatedB={<CardAd />}
          relatedC={<CardAd />}
          relatedD={<CardAd />}
          relatedE={<CardAd />}
        />
      </div>
    </Container>
  );
};

export default Ad;
