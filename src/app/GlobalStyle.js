import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Special+Elite');

  html, body {
    font-family: 'Roboto Mono', mono;
    margin: 0;
    padding: 0;
    overflow: hidden !important;
    color: white;
  }

  ::-webkit-scrollbar {
    width: 6px;
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
