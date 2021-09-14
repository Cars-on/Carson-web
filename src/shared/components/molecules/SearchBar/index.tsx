import React, { InputHTMLAttributes, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchBar = ({ className, ...rest }: ISearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  function handleUserSearch(e: any) {
    setSearchValue(e.target.value);
  }

  return (
    <Container className={className}>
      <input
        type="text"
        value={searchValue}
        onChange={handleUserSearch}
        {...rest}
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
