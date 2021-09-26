import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--gray-20);

  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    gap: 16px;
    margin: 3rem 0;

    list-style: none;

    color: black;

    li {
      border-radius: 50%;

      width: max-content;
      cursor: pointer;

      width: 47px;
      height: 47px;

      font-family: Archivo;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;
      border: 1px solid #000;

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;
      }

      &.selected {
        color: #fff;
        background: #38bcac;
        border: none;
      }

      &.previous,
      &.next {
        background: none;
        font-size: 32px;
        border: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 1055px;

  gap: 30px;
  padding: 10px;

  @media (max-width: 1250px) {
    justify-content: center;
  }
`;
