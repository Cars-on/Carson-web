import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  z-index: 9;
  top: 70px;

  height: calc(100vh - 70px);
  width: 100%;

  background: #fff;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      display: flex;
      align-items: center;

      font-family: Archivo;
      font-style: normal;
      font-size: 18px;
      line-height: 40px;

      margin: 0px;
      padding: 10px 24px;
      font-weight: normal;
      text-align: left;

      width: 100%;

      cursor: pointer;

      svg {
        margin-right: 20px;
        font-size: 24px;
      }

      &,
      svg {
        color: var(--green-aqua);
      }

      &:hover {
        background: linear-gradient(
          45deg,
          var(--green-aqua) -200%,
          transparent
        );
      }
    }
  }
`;
