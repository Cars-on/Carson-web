import styled from 'styled-components';

export const Container = styled.div`
  .related {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100%;
    background: #fff;

    margin-top: 2rem;
    padding: 2rem;

    .title-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 64px;

      h3 {
        font-family: Archivo;
        font-size: 16px;
        color: #0b2926;
      }

      h1 {
        font-family: 'Big Shoulders Display';
        font-size: 36px;
        color: #38bcac;
      }
    }

    .related-cars {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 48px;
    }
  }

  @media (max-width: 1440px) {
    .related {
      .related-cars {
        flex-wrap: wrap;
        row-gap: 2.25rem;
      }
    }
  }
`;
