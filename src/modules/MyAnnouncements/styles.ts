import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1800px;

  min-height: calc(100vh - 96px);
  height: max-content;
  padding: 120px 40px 40px;
  gap: 40px;
`;

export const Announcements = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 40px;
`;
