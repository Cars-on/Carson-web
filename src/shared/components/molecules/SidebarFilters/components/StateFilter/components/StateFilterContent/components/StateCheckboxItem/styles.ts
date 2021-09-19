import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface IInputCheckboxProps extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
}

export const InputCheckbox = styled.div<IInputCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.875rem;
  height: 1.875rem;
  overflow-x: initial;
  cursor: pointer;

  color: #a4b3b5;
  font-family: Archivo;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0em;

  ${props =>
    props.checked &&
    css`
      color: black;
      font-weight: bold;
    `}
`;
