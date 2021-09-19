import { HTMLAttributes, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Text = styled.p`
  color: #a4b3b5;

  font-family: Archivo;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0em;
`;

export const RadioInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  margin: 0 0 0 0.5rem;
`;
