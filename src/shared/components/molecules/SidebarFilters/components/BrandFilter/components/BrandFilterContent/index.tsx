import React from 'react';

import FiatLogo from '../../../../../../../assets/svgIcons/fiat-logo.svg';
import ChevroletLogo from '../../../../../../../assets/svgIcons/chevrolet-logo.svg';
import FordLogo from '../../../../../../../assets/svgIcons/ford-logo.svg';
import HondaLogo from '../../../../../../../assets/svgIcons/honda-logo.svg';
import HyundaiLogo from '../../../../../../../assets/svgIcons/hyundai-logo.svg';
import MitsubishiLogo from '../../../../../../../assets/svgIcons/mitsubishi-logo.svg';
import ToyotaLogo from '../../../../../../../assets/svgIcons/toyota-logo.svg';
import VolkswagenLogo from '../../../../../../../assets/svgIcons/volkswagen-logo.svg';

import BrandCheckboxItem from './components/BrandCheckboxItem';
import { Container } from './styles';

const BrandFilterContent: React.FC = () => {
  return (
    <Container>
      <BrandCheckboxItem text="Chevrolet" Image={ChevroletLogo} />
      <BrandCheckboxItem text="Fiat" Image={FiatLogo} />
      <BrandCheckboxItem text="Ford" Image={FordLogo} />
      <BrandCheckboxItem text="Honda" Image={HondaLogo} />
      <BrandCheckboxItem text="Mitsubishi" Image={MitsubishiLogo} />
      <BrandCheckboxItem text="Volkswagen" Image={VolkswagenLogo} />
      <BrandCheckboxItem text="Toyota" Image={ToyotaLogo} />
      <BrandCheckboxItem text="Hyundai" Image={HyundaiLogo} />
    </Container>
  );
};

export default BrandFilterContent;
