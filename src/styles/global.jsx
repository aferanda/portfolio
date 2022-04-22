import { createGlobalStyle } from 'styled-components';

import RobotoTtf from './fonts/roboto-mono-v13-latin-regular.ttf';
import RobotoWoff from './fonts/roboto-mono-v13-latin-regular.woff';
import RobotoWoff2 from './fonts/roboto-mono-v13-latin-regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    src: url(${RobotoTtf}) format('ttf'),
      url(${RobotoWoff}) format('woff'),
      url(${RobotoWoff2}) format('woff2');
  }

  :root {
    --blue: #6055a5;
    --dark-blue: #3e3c49;
    --grayish-blue: #b9b6d3;
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
    background-color: var(--white);
    color: var(--dark-blue);
  }

  a {
    text-decoration: none;
  }
`