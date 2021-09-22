import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100%;
  height: 100vh;

  .wrapper {
    width: 100%;
    height: 22.75rem;
    background: #38bcac;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
      width: 100%;

      .logo {
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
    }
  }
`;
