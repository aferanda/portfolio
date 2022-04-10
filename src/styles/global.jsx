import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: '';
    src: url();
  }

  :root {
    --blue: hsl(248, 32%, 49%);
    --dark-blue: hsl(249, 10%, 26%);
    --grayish-blue: hsl(246, 25%, 77%);
    --green: hsl(154, 59%, 51%);
    --red: hsl(0, 100%, 74%);
    --white: #FFF;

    --svg: #ef758c;

    --text: #1E2126;
    --secondary: #5b7083;
    --border: #ECECF3;
    --pink: #F5426A;
    --purple: #CF7CD5;
    --yellow: #FFCF67;
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
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background-color: var(--white);
    color: var(--main-font);
  }
`