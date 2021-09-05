import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 104px;
  position: absolute;
  top: 0;

  background: var(--blue-aqua);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  padding: 20px 30px;

  .options {
    display: flex;
    gap: 32px;
  }
`;
