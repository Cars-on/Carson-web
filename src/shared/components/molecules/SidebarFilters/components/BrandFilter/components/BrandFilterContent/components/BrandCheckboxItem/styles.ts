import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface IInputCheckboxProps extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
}

export const InputCheckbox = styled.div<IInputCheckboxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${props =>
    props.checked &&
    css`
      border: 2px solid #a4b3b5;
      padding: 0.5rem;
      border-radius: 2rem;
    `}
`;

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  margin: 0.5rem 0 0 0;

  font-family: Archivo;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.688rem;
  letter-spacing: 0em;

  color: #0b2926;
`;
