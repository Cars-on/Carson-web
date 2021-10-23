import React, { InputHTMLAttributes, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import capitalize from '@/shared/utils/capitalizeString';

import { Container } from './styles';

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  className,
  ...rest
}: ISearchBarProps) => {
  const [inputSearchValue, setInputSearchValue] = useState('');

  const { fetchFilterValue, removeFilterValue } = useSidebarFilter();

  function handleKeyPress(e: any) {
    if (e.key === 'Enter') {
      fetchFilterValue({ brandFilter: inputSearchValue });
    }
  }

  function handleInputChange(e: any) {
    const searchValue = e?.target?.value;

    if (searchValue.length < 1) {
      removeFilterValue('brandFilter');
    }

    setInputSearchValue(capitalize(searchValue));
  }

  return (
    <Container className={className}>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
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
