import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .content {
    margin-top: 10rem;
    background: #fff;
    padding: 2rem;
    border-radius: 2rem;
  }

  .drag-and-drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    aside {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin: 2rem 0;
    }

    .section-title {
      margin-bottom: 2rem;

      div > div {
        height: 800px !important;
      }

      h1 {
        font-family: 'Big Shoulders Display';
        font-weight: bold;
        font-size: 2rem;
        color: #38bcac;
      }

      p {
        font-family: Archivo;
        font-size: 1rem;
        color: #0b2926;
      }
    }

    .files-ready {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h4 {
        font-family: Archivo;
        font-size: 1rem;
        color: #0b2926;
      }
      ul {
        display: inline;
        list-style-type: none;
        text-align: center;
        font-family: Archivo;
        font-size: 1rem;
        color: #38bcac;
      }
    }
  }

  @media (max-width: 640px) {
    div {
      width: 100% !important;
    }
  }
`;
