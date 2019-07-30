import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const EmptyLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
`;

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <EmptyLayout>
          <Container>
            <LeftSide />
            <RightSide />
          </Container>
        </EmptyLayout>
      </>
    </ThemeProvider>
  </ApolloProvider>
);

export default hot(App);
