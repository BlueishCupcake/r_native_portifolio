import {createGlobalStyle} from 'styled-components';
import reset from 'react-style-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --bg: #27293F;
    --dark-blue-gray: #626593;
    --blue-violet: #531D86;
    --mardi: #8F0075;
    --flamingo-pink: #B80084; 
  }
  *{
    box-sizing: border-box;
    outline: none;
  }
  a{
    text-decoration: none;
  }
  html,
  body { 
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
    font-family: 'DM Sans', sans-serif;
  }
  `;
