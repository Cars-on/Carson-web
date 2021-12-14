import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  padding: 10rem 0;

  h1 {
    font-family: Archivo;
  }

  div.info {
    h3 {
      margin: 0.5rem 0;
      font-family: Archivo;
    }
  }

  button {
    padding: 0.75rem;
    font-size: 1.5rem;

    border-radius: 0.5rem;
    background: #f61461;
    color: #fff;
  }

  button.update {
    background: var(--green-aqua);
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  max-width: 800px;

  gap: 2rem;
`;
