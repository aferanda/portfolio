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
    --white: #FFF;

    --grey-200: #ECECF3;
    --grey-100: #F5F5FA;

    --dark-600: #3e3c49;
    --dark-800: #1E2126;
    --dark-900: #121212;

    --purple-600: #5D4375;
    --purple-700: #38344a;
    --purple-900: #2E2139;

    --blue-500: #6055a5;
    --red-300: #ef758c;
    --red-400: #f5426a;
    --malva-300: #CF7CD5;
    --maize-300: #ffcf67;

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
    position: relative;
  }

  a {
    text-decoration: none;
  }
`