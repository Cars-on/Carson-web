import React, { useState, useEffect } from 'react';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { formatBrazilianCurrency } from '@/shared/utils/inputMaskGenerator';

import PriceInput from './components/PriceInput';
import { Container, InputContainer, Text } from './styles';

const PriceFilterContent = () => {
  const [fromPrice, setFromPrice] = useState<string>('');
  const [toPrice, setToPrice] = useState<string>('');

  const { filtersValue, fetchFilterValue } = useSidebarFilter();

  const handleFromPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedCurrency = formatBrazilianCurrency(value);
    setFromPrice(formattedCurrency);
  };

  const handleToPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedCurrency = formatBrazilianCurrency(value);
    setToPrice(formattedCurrency);
  };

  useEffect(() => {
    fetchFilterValue({
      fromPriceFilter: fromPrice,
    });
  }, [fromPrice]);

  useEffect(() => {
    fetchFilterValue({
      toPriceFilter: toPrice,
    });
  }, [toPrice]);

  useEffect(() => {
    if (filtersValue.fromPriceFilter === '') {
      setFromPrice('');
    }

    if (filtersValue.toPriceFilter === '') {
      setToPrice('');
    }
  }, [filtersValue.fromPriceFilter, filtersValue.toPriceFilter]);

  return (
    <Container>
      <InputContainer>
        <PriceInput
          placeholder="de"
          onChange={handleFromPrice}
          value={fromPrice}
        />
        <Text>ex.: 2010</Text>
      </InputContainer>

      <InputContainer>
        <PriceInput
          placeholder="até"
          onChange={handleToPrice}
          value={toPrice}
        />
        <Text>ex.: 2018</Text>
      </InputContainer>
    </Container>
  );
};

export default PriceFilterContent;
