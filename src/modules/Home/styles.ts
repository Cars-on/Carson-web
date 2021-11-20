import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  width: 100%;

  padding: 104px 0 0 0;

  .mobile-filters {
    position: fixed;
    overflow: scroll;
    top: 0;
    z-index: 99;

    width: 100vw;
    height: 100vh;
    background: #fff;

    > div {
      width: 100%;
      max-width: 100%;
    }
  }

  .open-filter {
    bottom: 25px;
    right: 25px;
    position: fixed;
    z-index: 99;

    border: none;
    font-size: 1.5rem;
    padding: 5px 10px;
    border-radius: 0.5rem;
  }

  @media (max-width: 900px) {
    position: relative;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;

  width: 100%;
  max-width: 1800px;

  color: #fff;
  background: #fff;

  .search-bar {
    margin: 4rem 2.188rem;
  }
`;
