import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;

  .images {
    .main-image {
      width: 400px;
      height: 400px;
      overflow: hidden;

      img {
        cursor: pointer;
        max-width: 100%;
        border-radius: 32px;
      }
    }

    .abc-images {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      width: 100%;
      margin-top: 1rem;

      img {
        cursor: pointer;
        border-radius: 2rem;
        width: 100px;
        height: 100px;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 400px;
    row-gap: 2rem;

    h1 {
      font-family: 'Big Shoulders Display';
      font-size: 36px;
      color: #38bcac;
    }

    h3 {
      font-family: 'Big Shoulders Display';
      font-weight: bold;
      font-size: 24px;
      color: #0b2926;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: Archivo;
      font-size: 16px;
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
      max-width: 400px;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .images {
      zoom: 67%;
    }
  }
`;
