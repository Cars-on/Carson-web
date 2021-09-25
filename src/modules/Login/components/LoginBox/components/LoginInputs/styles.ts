import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  row-gap: 2rem;

  .email,
  .password {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 29.5rem;
    height: 3.125rem;
    border: 0.5px solid #a4b3b5;
    border-radius: 32px;
    padding: 1rem;
    column-gap: 0.5rem;

    img {
      height: 1.25rem;
    }
  }

  .email:hover,
  .password:hover {
    transition: all 0.3s;
    border: 1px solid #38bcac;
  }

  input {
    appearance: none;
    width: 100%;
    border: none;
  }

  input::placeholder {
    font-family: Archivo;
    font-size: 1.125rem;
    color: #a4b3b5;
  }

  .forget-password {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  @media (max-width: 425px) {
    .email,
    .password {
      width: 100%;
    }
  }
`;
