import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Special+Elite');

  html, body {
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    color: white;
    background: red;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 5px 5px 5px #D9D8DB;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 0px;
  }
`;

export default GlobalStyle;
