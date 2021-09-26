import { HTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  Input {
    &:first-child {
      margin: 0 1rem 0 0;
    }
  }
`;

export const InputContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  margin: 1rem 0 0 0;
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
