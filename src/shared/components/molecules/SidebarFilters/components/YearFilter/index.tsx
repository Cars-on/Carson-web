import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import TitleIcon from '@/shared/components/atoms/TitleIcon';
import YearFilterContent from './components/YearFilterContent';
import { Container } from './styles';

const YearFilter: React.FC = () => {
  return (
    <Container>
      <TitleIcon title="Ano" Icon={FiCalendar} />
      <YearFilterContent />
    </Container>
  );
};

export default YearFilter;
