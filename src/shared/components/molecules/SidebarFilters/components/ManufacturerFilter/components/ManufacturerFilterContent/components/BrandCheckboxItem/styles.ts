import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface IInputCheckboxProps extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
}

export const InputCheckbox = styled.div<IInputCheckboxProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
  width: 4rem;

  padding: 0.8rem 1.9rem;
  border-radius: 1.2rem;
  border: 2px solid #fff;

  &:hover {
    border: 2px solid #828988;
  }

  ${props =>
    props.checked &&
    css`
      border: 2px solid #a4b3b5;
    `}
`;

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  margin: 0.5rem 0 0 0;

  font-family: Archivo;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.688rem;
  letter-spacing: 0em;

  color: #0b2926;
`;
