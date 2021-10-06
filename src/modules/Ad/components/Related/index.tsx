import React, { HTMLAttributes, useEffect, useState } from 'react';

import { IAnnouncement } from '@/shared/dto';
import CardAd from '@/shared/components/molecules/CardAd';
import { Slider } from '@/shared/components/molecules/Slider';

import { Container } from './styles';

interface IRelated extends HTMLAttributes<HTMLElement> {
  announcements: IAnnouncement[];
}

const Related = ({ announcements }: IRelated) => {
  const [sliders, setSliders] = useState<any[]>([]);

  useEffect(() => {
    let local_slider: any[] = [];

    if (announcements) {
      announcements.forEach(announcement => {
        local_slider.push(<CardAd announcement={announcement} />);
      });

      setSliders(local_slider);
    }
  }, [announcements]);
  return (
    <Container>
      <div className="related">
        <div className="title-section">
          <h3>Talvez você goste também</h3>
          <h1>Carros Relacionados</h1>
        </div>

        <Slider slides={sliders} />
      </div>
    </Container>
  );
};

export default Related;
