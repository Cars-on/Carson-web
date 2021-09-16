import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 10rem;
    padding: 2rem;
    border-radius: 2rem;

    width: 100vw;
  }
`;
