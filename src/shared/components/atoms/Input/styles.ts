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

  height: 1.875rem;
  width: 5.625rem;
  border-radius: 2rem;
  border: 1px solid #0b2926;

  &::placeholder {
    padding: 0 0 0 0.75rem;

    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 0.625rem;

    color: #a4b3b5;
  }
`;

export const Text = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  font-family: Archivo;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.688rem;
  letter-spacing: 0em;
  color: #0b2926;

  margin: 0.5rem 0 0 0;
`;
