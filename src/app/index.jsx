import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { ThemeProvider } from 'styled-components'

import LeftSide from './LeftSide'
import RightSide from './RightSide'
import theme from './theme'

const EmptyLayout = styled.div`
  display: flex;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <EmptyLayout>
      <Container>
        <LeftSide />
        <RightSide />
      </Container>
    </EmptyLayout>
  </ThemeProvider>
)

export default hot(module)(App)
