import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;

  .images {
    .main-image {
      width: 25rem;
      height: 25rem;
      overflow: hidden;

      img {
        cursor: pointer;
        max-width: 100%;
        border-radius: 2rem;

        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .abc-images {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 1rem;
      width: 100%;
      margin-top: 1rem;

      img {
        cursor: pointer;
        border-radius: 1rem;
        width: 6.25rem;
        height: 6.25rem;

        object-fit: cover;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 32rem;
    row-gap: 1rem;

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
  }

  @media (max-width: 780px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;

    .images {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 25rem;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .images {
      zoom: 67%;
    }
  }
`;
