import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Robote', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    background: #f3f3f3;
  }
`;
