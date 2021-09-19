import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 32px;

  position: relative;
  width: 9.375rem;
  height: 2.5rem;

  margin: 0 1rem 0 0;

  &:last-child {
    margin: 0;
  }
`;

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  color: #a4b3b5;
`;

export const CloseButton = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 0.5rem;

  border: none;
  border-radius: 2rem;
  background: #f6f6f6;

  svg {
    fill: #a4b3b5;
    font-size: 1rem;
  }
`;
