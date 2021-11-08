import React, { useState } from 'react';
import { api } from '@/shared/providers/api';

interface ICarSpecifications {
  id: string;
  brand: string;
  price: number;
  manufacturer_year: string;
  brand_year: string;
  manufacturer: string;
  description: string;
  viewed: string;
  created_at: string;
}

interface IUpdateFields {
  specifications: ICarSpecifications;
  onCancel: () => void;
}

import { Container, InputSection } from './styles';

const UpdateFields = ({ specifications, onCancel }: IUpdateFields) => {
  const advertsInfo: any = {
    brand: specifications.brand,
    price: specifications.price,
    manufacturer_year: specifications.manufacturer_year,
    brand_year: specifications.brand_year,
    manufacturer: specifications.manufacturer,
    description: specifications.description,
  };

  function handleInputChange(e: any) {
    const key = e.target.name;
    const value = e.target.value;

    advertsInfo[key] = value;
  }

  function handleCancel() {
    if (onCancel) onCancel();
  }

  async function handleUpdate() {
    try {
      await api.put(`/announcements-users/${specifications.id}`, {
        ...advertsInfo,
      });

      location.reload();
    } catch (error: any) {
      console.log(error.response);
    }
  }

  return (
    <Container>
      <InputSection>
        <label>Nome:</label>
        <input
          name="brand"
          placeholder="Nome"
          type="text"
          onChange={handleInputChange}
          defaultValue={specifications?.brand}
        />
      </InputSection>

      <InputSection>
        <label>Valor:</label>
        <input
          name="price"
          placeholder="Valor"
          type="number"
          onChange={handleInputChange}
          defaultValue={specifications?.price}
        />
      </InputSection>

      <InputSection>
        <label>Ano de fabricação:</label>
        <input
          name="manufacturer_year"
          placeholder="Ano de fabricação"
          type="number"
          onChange={handleInputChange}
          defaultValue={specifications?.manufacturer_year}
        />
      </InputSection>

      <InputSection>
        <label>Ano do modelo:</label>
        <input
          name="brand_year"
          placeholder="Ano do modelo"
          type="number"
          onChange={handleInputChange}
          defaultValue={specifications.brand_year}
        />
      </InputSection>

      <InputSection>
        <label>Fabricante / Marca:</label>
        <input
          name="manufacturer"
          placeholder="Fabricante / Marca"
          type="text"
          onChange={handleInputChange}
          defaultValue={specifications?.manufacturer}
        />
      </InputSection>

      <textarea
        name="description"
        placeholder="Descrição"
        rows={5}
        onChange={handleInputChange}
        defaultValue={specifications?.description}
      />

      <section className="options">
        <button className="cancel" onClick={handleCancel}>
          CANCELAR
        </button>
        <button className="confirm" onClick={handleUpdate}>
          CONFIRMAR
        </button>
      </section>
    </Container>
  );
};

export default UpdateFields;
