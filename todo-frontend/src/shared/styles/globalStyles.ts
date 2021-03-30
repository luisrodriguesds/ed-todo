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
    background: var(--bg-secondary);
  }

  :root {
    --primary: #343a40;
    --secondary: #495057;

    --bg-primary: #6c757d;
    --bg-secondary: #adb5bd;
    --bg-tertiary: #dee2e6;

    --dark: #212529;
    --gray: #ced4da;

  }
`;
