import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 32rem;
  row-gap: 1rem;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 25rem;
    text-align: center;
  }

  h1 {
    font-family: 'Big Shoulders Display';
    font-size: 36px;
    color: #38bcac;
  }

  .metrics {
    display: flex;
    flex-direction: column;

    small {
      font-family: Archivo;
      color: var(--black-70);
    }
  }

  h3 {
    font-family: 'Big Shoulders Display';
    font-weight: bold;
    font-size: 1.5rem;
    color: #0b2926;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: Archivo;
    font-size: 1rem;
    color: #0b2926;
    column-gap: 0.5rem;
  }
`;
