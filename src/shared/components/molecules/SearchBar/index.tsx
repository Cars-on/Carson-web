import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface ISearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: ISearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  function handleUserSearch(e: any) {
    setSearchValue(e.target.value);
  }

  return (
    <Container className={className}>
      <input
        type="text"
        value={searchValue}
        placeholder="Digite o modelo, cor, ano, marca..."
        onChange={handleUserSearch}
      />
      <button type="button">
        <FiSearch />
      </button>
    </Container>
  );
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
