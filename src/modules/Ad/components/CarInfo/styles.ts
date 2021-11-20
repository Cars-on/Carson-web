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

      @media (max-width: 900px) {
        justify-content: center;
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

export const OwnerOptions = styled.section`
  display: flex;
  align-items: center;

  gap: 10px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
