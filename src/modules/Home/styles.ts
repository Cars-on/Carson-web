import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 104px 0 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1800px;

  padding: 0 1.875rem;

  color: #fff;

  .search-bar {
    margin: 4rem 2.188rem;
  }
`;
