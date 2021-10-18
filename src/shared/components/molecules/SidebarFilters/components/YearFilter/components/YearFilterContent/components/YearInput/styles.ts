import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const InputContainer = styled.input<
  InputHTMLAttributes<HTMLInputElement>
>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 6rem;
  padding: 0 0 0 0.75rem;

  font-size: 1rem;
  border-radius: 2rem;
  border: 1px solid #0b2926;

  &::placeholder {
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;

    color: #a4b3b5;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
