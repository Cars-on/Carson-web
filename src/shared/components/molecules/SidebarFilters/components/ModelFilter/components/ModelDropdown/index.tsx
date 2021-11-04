import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { RiGasStationLine } from 'react-icons/ri';

import { Container, RemoveFilterX, SelectModelButton } from './styles';
import { models_list } from './data';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';

const ModelInput = () => {
  const [showList, setShowList] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  const { filtersValue, fetchFilterValue, removeFilterValue } =
    useSidebarFilter();

  function toggleListVisibility() {
    setShowList(!showList);
  }

  function handleSelectModel(e: any) {
    fetchFilterValue({ modelFilter: e?.target?.innerText });
    setSelectedModel(e?.target?.innerText);
    toggleListVisibility();
  }

  function handleResetSelectModel(e: any) {
    setSelectedModel('');
    toggleListVisibility();
    removeFilterValue('modelFilter');
  }

  useEffect(() => {
    function onClick(e: any) {
      const className: string = e?.target?.className;
      if (typeof className === 'string' && !className.includes('list')) {
        toggleListVisibility();
      }
    }

    if (showList) {
      document.addEventListener('click', onClick);

      return () => document.removeEventListener('click', onClick);
    }
  }, [showList]);

  return (
    <Container>
      <section>
        <SelectModelButton onClick={toggleListVisibility}>
          <RiGasStationLine />{' '}
          {selectedModel
            ? `Modelo selecionado: ${selectedModel}`
            : 'Selecione o modelo'}
        </SelectModelButton>

        {selectedModel && (
          <RemoveFilterX onClick={handleResetSelectModel}>
            <FiX />
          </RemoveFilterX>
        )}
      </section>

      {showList && (
        <ul className="list">
          {models_list.map(model => (
            <li
              key={model}
              value={model}
              onClick={handleSelectModel}
              className="list-item"
            >
              {model}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ModelInput;
