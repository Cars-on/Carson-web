import styled, { css } from 'styled-components';

interface ContainerProps {
  willAdvance: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;

  svg {
    z-index: 2;
  }

  h1 {
    font-family: 'Archivo';
    font-size: 2.5rem;
    text-align: center;
    margin: 60px 0 10px;
  }

  span {
    font-family: 'Archivo';
    font-size: 1.5rem;
    text-align: center;
    margin: 10px 0 80px;
  }

  svg,
  h1,
  span {
    transition: all 0.5s ease-in-out;
  }

  ${props =>
    props.willAdvance &&
    css`
      svg,
      h1,
      span {
        transform: translateX(+1000%);
        opacity: 0;
      }
    `}
`;
