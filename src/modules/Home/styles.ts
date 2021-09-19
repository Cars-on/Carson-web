import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
  width: 100%;

  padding: 104px 0 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;

  width: 100%;
  max-width: 1800px;

  color: #fff;

  .search-bar {
    margin: 4rem 2.188rem;
  }
`;
