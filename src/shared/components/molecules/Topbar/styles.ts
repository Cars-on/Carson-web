import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 104px;
  position: absolute;
  top: 0;

  background: var(--green-aqua);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
  max-width: 1800px;
  padding: 20px 30px;

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: max-content;

    margin-right: 20px;

    > img {
      width: 9.375rem;
      margin-right: 20px;
    }

    @media (max-width: 650px) {
      .search_bar {
        display: none;
      }
    }
  }

  .options {
    display: flex;
    gap: 32px;
  }
`;

export const SidebarMenu = styled(FiMenu)`
  cursor: pointer;
  font-size: 3rem;
  color: var(--white);
  margin-right: 20px;

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
  }
`;
