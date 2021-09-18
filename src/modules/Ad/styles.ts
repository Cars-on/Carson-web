import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    width: 100vw;

    .ad-info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      column-gap: 4rem;
      max-width: 1400px;
      width: 100%;
    }
  }

  @media (max-width: 1440px) {
    padding: 2rem;
    .content {
      .ad-info {
        zoom: 90%;
      }
    }
  }

  @media (max-width: 1200px) {
    .content {
      .ad-info {
        flex-direction: column;
        row-gap: 4rem;
      }
    }
  }

  @media (max-width: 780px) {
    .content {
      .ad-info {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
  }
`;
