import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #a4b3b5;
  box-sizing: border-box;
  border-radius: 32px;

  span {
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #0b2926;
    row-gap: 20px;
    column-gap: 20px;
    padding: 8px 16px;
  }

  background: none;
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.05);
    background: #38bcac;
    border: 1px solid transparent;

    span {
      font-weight: bold;
      color: #ffffff;
    }
  }
`;
