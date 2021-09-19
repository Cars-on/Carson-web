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
`;

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>``;

export const CloseButton = styled.div<ButtonHTMLAttributes<HTMLButtonElement>>`
  position: absolute;
  padding: 0.531rem;
  right: 0.5rem;

  background: #f6f6f6;
  border-radius: 100%;

  svg {
    color: #a4b3b5;
    height: 0.5rem;
    font-size: 0.5rem;
  }
`;
