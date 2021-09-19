import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 5rem 0 2rem;

  h1,
  span {
    color: #fff;
    z-index: 2;
    text-align: center;
  }

  h1 {
    font-family: 'Archivo';
    font-size: 3rem;

    margin: 0 0 10px;
  }

  span {
    font-family: 'Archivo';
    font-size: 1.5rem;
    margin: 10px 0 0;
  }

  h1,
  span,
  > section {
    animation: recoveryElements 0.3s normal;
  }

  @keyframes recoveryElements {
    0% {
      opacity: 0;
      transform: translateX(+500%);
    }

    100% {
      opacity: 1;
      transform: translateX(-0%);
    }
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionLogs = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  height: 9.5rem;
  width: 80%;
  overflow: auto;
  margin-bottom: -3rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e5e5e5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38bcac;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    height: 50%;
  }
`;

export const SingleLog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 200px;
  min-height: 60px;
`;

export const ErrorLogTitle = styled.h3`
  font-family: 'Archivo';
`;

export const ErrorLogDescription = styled.p`
  font-family: 'Archivo';
`;
