import styled from 'styled-components';

export const Container = styled.div`
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  :hover {
    transition: all 0.3s;
    transform: scale(1.02);
  }

  section.infos {
    display: flex;
    flex-direction: column;

    gap: 14px;

    padding: 0 0 0 17px;
    border-left: 1px solid #a4b3b5;

    h1 {
      font-family: Archivo;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 17px;

      color: #38bcac;
    }

    span {
      font-family: 'Big Shoulders Display';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;

      color: #0b2926;
    }

    p {
      font-family: Archivo;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;

      color: #0b2926;
    }

    button {
      transition: all 0.3s;

      width: 212px;
      height: 48px;

      background: none;
      border-radius: 32px;
      border: 1px solid #a4b3b5;

      font-family: Archivo;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
    }

    button:hover {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }

  img {
    width: 235px;
    height: 131px;

    border-radius: 32px;

    margin-bottom: 16px;
  }
`;
