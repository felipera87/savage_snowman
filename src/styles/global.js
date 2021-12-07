import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #000;
    background-color: #F8F8F8;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font-family: 'Iceland', cursive;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;
