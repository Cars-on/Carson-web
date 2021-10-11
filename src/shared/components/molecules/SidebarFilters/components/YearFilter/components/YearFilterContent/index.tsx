import React, { useState, useCallback, useEffect } from 'react';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';

import YearInput from './components/YearInput';
import { Container, InputContainer, Text } from './styles';

const YearFilterContent: React.FC = () => {
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');

  const { filtersValue, fetchFilterValue } = useSidebarFilter();

  const handleFromYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 4)
        return setFromYear(e.target.value.slice(0, 4));
      setFromYear(e.target.value);
    },
    [setFromYear],
  );

  const handleToYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 4)
        return setToYear(e.target.value.slice(0, 4));
      setToYear(e.target.value);
    },
    [setToYear],
  );

  useEffect(() => {
    if (fromYear.length === 4) {
      fetchFilterValue({
        fromYearFilter: fromYear,
      });
    }
  }, [fromYear]);

  useEffect(() => {
    if (toYear.length === 4) {
      fetchFilterValue({
        toYearFilter: toYear,
      });
    }
  }, [toYear]);

  useEffect(() => {
    if (filtersValue.fromYearFilter === '') {
      setFromYear('');
    }

    if (filtersValue.toYearFilter === '') {
      setToYear('');
    }
  }, [filtersValue.fromYearFilter, filtersValue.toYearFilter]);

  return (
    <Container>
      <InputContainer>
        <YearInput
          placeholder="de"
          onChange={handleFromYear}
          value={fromYear}
        />
        <Text>ex.: 2010</Text>
      </InputContainer>

      <InputContainer>
        <YearInput placeholder="de" onChange={handleToYear} value={toYear} />
        <Text>ex.: 2018</Text>
      </InputContainer>
    </Container>
  );
};

export default YearFilterContent;
