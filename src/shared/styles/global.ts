import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-100: #051211;
    --black-70: #505a59;
    --black-20: #cdd0cf;
    --gray: #a4b3b5;
    --gray-20: #fafafa;

    --green-aqua: #38bcac;
    --green-dark: #0b2926;
    --green: #38bc6d;
    --red: #bc3838;
    --yellow: #ecfa4b;
    --white: #ffffff;

    --gradient: linear-gradient(90deg, #38bcac 0%, #a4b3b5 100%);
    --lightRed: #d17474;
  }

  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    height: max-content;
    min-height: 100vh;
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    position: relative;
    background: var(--gray-20);
  }

  h1 {
    font-family: 'Big Shoulders Display', cursive;
  }

  p {
    font-family: 'Archivo', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1680px) {
    html {
      font-size: 94.75%;
    }
  }

  @media (max-width: 1440px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 1360px) {
    html {
      font-size: 81.25%;
    }
  }
`;
