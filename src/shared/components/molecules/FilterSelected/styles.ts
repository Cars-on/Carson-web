import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 0;
  padding: 0.5rem;
  border: 0.5px solid #a4b3b5;
  border-radius: 2rem;
`;
