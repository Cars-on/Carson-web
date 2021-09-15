import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100vw;
  height: 100vh;

  .drag-and-drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    background: #fff;
    padding: 2rem;

    h1 {
      font-family: "Big Shoulders Display";
      font-weight: bold;
      font-size: 36px;
      color: #38bcac;
    }
  }
`;
