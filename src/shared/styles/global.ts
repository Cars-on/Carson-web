import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-100: #051211;
    --black-70: #505A59;
    --black-50: #ECFA4B;
    --black-20: #CDD0CF;
    --gray: #A4B3B5;

    --blue-aqua: #38BCAC;
    --green-dark: #0B2926;
    --green: #38BC6D;
    --red: #BC3838;
    --yellow: #ECFA4B;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
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
