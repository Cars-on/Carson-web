import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 4rem;
  gap: 6.25rem;

  @media (max-width: 1005px) {
    padding: 6rem 4rem 4rem 4rem;
    justify-content: center;
  }
`;
