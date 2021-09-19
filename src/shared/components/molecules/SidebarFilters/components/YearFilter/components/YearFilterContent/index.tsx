import React, { useCallback, useEffect, useState } from 'react';

import Input from '@/shared/components/atoms/Input';
import { Container } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';

const YearFilterContent: React.FC = () => {
  return (
    <Container>
      <Input placeholder="de" example="ex.:2010" />

      <Input placeholder="até" example="ex.:2018" />
    </Container>
  );
};

export default YearFilterContent;
