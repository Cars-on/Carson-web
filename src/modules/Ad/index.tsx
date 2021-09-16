import React from 'react';

import Contact from './components/Contact';
import CarInfo from './components/CarInfo';
import userPhoto from '@/shared/assets/people/leo-photo.png';

import mainImageCar from '@/shared/assets/illustrations/main-image-car.png';
import imgACar from '@/shared/assets/illustrations/img-a.png';
import imgBCar from '@/shared/assets/illustrations/img-b.png';
import imgCCar from '@/shared/assets/illustrations/img-c.png';

import { Container } from './styles';

const Ad: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <CarInfo
          mainImage={mainImageCar}
          imgA={imgACar}
          imgB={imgBCar}
          imgC={imgCCar}
          name="Audi Série A Preto"
          price="R$ 299.400"
          year="2017/2017"
          localization="Campinas - SP"
          model="AUDI"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
        />
        <Contact
          photo={userPhoto}
          name="Leonardo Messias"
          phone="(12) 991668899"
        />
      </div>
    </Container>
  );
};

export default Ad;
