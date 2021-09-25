import { HTMLAttributes, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0 0 0;
`;

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

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  font-family: Archivo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.688rem;
  letter-spacing: 0em;
  color: #0b2926;

  margin: 0.5rem 0 0 0;
`;
