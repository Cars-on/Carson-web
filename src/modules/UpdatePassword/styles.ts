import styled from 'styled-components';
import Wrapper from '@/shared/components/templates/Wrapper';

export const Container = styled(Wrapper)``;

export const UpdateSection = styled.section`
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

export const InputsSection = styled.section`
  width: 100%;

  .input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 29.5rem;
    width: 100%;
    height: 3.125rem;
    border: 0.5px solid #a4b3b5;
    border-radius: 32px;
    padding: 1rem;
    column-gap: 0.5rem;

    position: relative;

    margin: 2rem 0;

    span.error {
      width: max-content;
      position: absolute;
      top: 3.2rem;
      color: red;
    }

    &:hover {
      transition: all 0.3s;
      border: 1px solid #38bcac;
    }

    input {
      appearance: none;
      width: 100%;
      border: none;
      font-size: 1.125rem;
      line-height: 1.125rem;
    }

    input::placeholder {
      font-family: Archivo;
      font-size: 1.125rem;
      color: #a4b3b5;
    }

    .focus-visible {
      background-color: transparent !important;
    }

    img {
      height: 1.25rem;
    }
  }
`;
