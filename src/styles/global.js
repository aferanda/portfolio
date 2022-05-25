import { createGlobalStyle } from 'styled-components';

import RobotoTtf from './fonts/roboto-mono-v13-latin-regular.ttf';
import RobotoWoff from './fonts/roboto-mono-v13-latin-regular.woff';
import RobotoWoff2 from './fonts/roboto-mono-v13-latin-regular.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    src: url(${RobotoTtf}) format('ttf'),
      url(${RobotoWoff}) format('woff'),
      url(${RobotoWoff2}) format('woff2');
  }

  :root {
    --blue: #6055a5; // rgb(96, 85, 165)
    --roxo: #5F458C; // rgb(95, 69, 140)
    --denovo: #633BBC; // rgb(99, 59, 188)
    --dark-blue: #3e3c49; // rgb(62, 60, 73)
    --background-dark: #191622; // rgb(25, 22, 34)
    --grayish-blue: #b9b6d3; // rgb(185, 182, 211)
    --green: #38cc8c;
    --red: #ff7a7a;
    --white: #FFF;

    --font-base: #ef758c;
    --font-base2: #F396AB;
    --glassmorphism: #ffffffbf;

    --text: #1E2126;
    --secondary: #5b7083;
    --border: #ECECF3;
    --pink: #f5426a;
    --purple: #CF7CD5;
    --yellow: #ffcf67;
    --lightgrey: #F5F5FA;

    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 16px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  a {
    text-decoration: none;
  }
`