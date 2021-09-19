import React from 'react';
import { MdInvertColors } from 'react-icons/md';

import { Container } from './styles';
import TitleIcon from '@/shared/components/atoms/TitleIcon';
import ColorFilterContent from './components/ColorFilterContent';

const ColorFilter: React.FC = () => {
  return (
    <Container>
      <TitleIcon Icon={MdInvertColors} title="Cor" />
      <ColorFilterContent />
    </Container>
  );
};

export default ColorFilter;
