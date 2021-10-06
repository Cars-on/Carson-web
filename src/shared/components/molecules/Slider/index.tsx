import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Container } from './styles';

export const renderPrevButton = () => {
  return (
    <button>
      <FiChevronLeft size={36} color="#fff" />
    </button>
  );
};

export const renderNextButton = () => {
  return (
    <button>
      <FiChevronRight size={36} color="#fff" />
    </button>
  );
};

interface ISliderProps {
  slides: any[] | undefined;
}

export const Slider = ({ slides }: ISliderProps) => {
  const responsive = {
    550: { items: 2 },
    780: { items: 3 },
    1020: { items: 4 },
    1300: { items: 5 },
  };

  return (
    <Container>
      <AliceCarousel
        infinite
        items={slides}
        responsive={responsive}
        mouseTracking
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </Container>
  );
};
