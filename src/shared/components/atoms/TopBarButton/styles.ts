import styled, { css } from 'styled-components';

interface IContainerProps {
  primary?: boolean;
  hasIcon?: boolean;
  angle?: 'horizontal' | 'vertical';
}

export const Container = styled.button<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 32px;
  gap: 20px;

  background: none;

  ${props =>
    props.angle === 'horizontal'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column-reverse;
        `}

  span {
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    color: var(--white);
  }

  ${props =>
    !props.hasIcon &&
    css`
      background: var(--white);
      padding: 0.625rem 1.5rem;

      span {
        color: var(--green-aqua);
      }
    `}

  svg {
    width: 18px;
    height: 20px;
    border-radius: 50%;
    padding: 10px 12px;
    box-sizing: content-box;
    background: var(--white);
    color: var(--green-aqua);
  }

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    svg {
      height: 1rem;
      width: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 1000px) {
    zoom: 86%;
  }
`;
