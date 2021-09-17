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
    margin-top: 10rem;
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
`;
