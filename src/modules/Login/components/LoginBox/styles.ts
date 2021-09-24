import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);

  width: 37.5rem;
  padding: 2rem 4rem;
  gap: 4rem;
  margin-top: 12rem;

  .message-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    h1 {
      font-size: 2.25rem;
      color: #38bcac;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 2rem 2rem;
    width: 100%;
  }
`;
