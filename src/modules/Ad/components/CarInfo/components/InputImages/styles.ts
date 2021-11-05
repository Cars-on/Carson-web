import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 12.375rem;
  height: 3rem;

  border: 1px solid #a4b3b5;
  box-sizing: border-box;
  border-radius: 2rem;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }
`;

export const InputImages = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  display: none;
`;

export const LabelImages = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
  font-family: Archivo;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  color: var(--green-dark);
`;
