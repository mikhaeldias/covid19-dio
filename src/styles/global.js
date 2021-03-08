import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #f8f8f8;
    font-family: 'Ubuntu', sans-serif;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
  }

  .cursor {
    cursor: pointer;
  }
`;
