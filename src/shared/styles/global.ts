import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  :root { 
    --dark: #0B2926;
    --grey: #A4B3B5;
    --white: #FFFFFF;
    --gradient: linear-gradient(90deg, #38BCAC 0%, #A4B3B5 100%);
    --lightRed: #D17474
    --lightBlue: #38BCAC;
    --lightGrey: #FAFAFA;
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
