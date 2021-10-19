import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 26rem;
  background: #ffffff;
  border-radius: 2rem;
  padding: 2rem;
  row-gap: 2rem;

  .user-info {
    display: flex;
    width: 100%;
    column-gap: 1rem;

    .user-photo {
      img {
        width: 5rem;
        height: 5rem;
      }
    }

    .name-and-contact {
      margin-top: 0.5rem;

      h2 {
        font-family: Archivo;
        font-weight: 400;
        font-size: 1.5rem;
        color: #0b2926;
        margin-bottom: 0.5rem;
      }

      p {
        font-family: Archivo;
        font-size: 1rem;
        color: #a4b3b5;
        display: flex;
        column-gap: 0.5rem;
      }
    }
  }

  .send-message {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .security-advice {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 1rem;

    p {
      font-family: Archivo;
      font-size: 1rem;
      color: #0b2926;
      column-gap: 0.5rem;
    }
  }

  @media (max-width: 400px) {
    zoom: 67%;
  }
`;
