import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  max-width: 500px;
  width: 100%;
  height: 3.75rem;
  padding: 0 32px;

  border-radius: 32px;
  border: 1px solid var(--green-aqua);
  background: var(--white);

  input,
  svg {
    color: var(--green-aqua);
  }

  input {
    width: 100%;
    height: 100%;

    border: none;

    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.25rem;
  }

  svg {
    height: 1.313rem;
    width: 1.313rem;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;

    transition: 0.3s transform;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
