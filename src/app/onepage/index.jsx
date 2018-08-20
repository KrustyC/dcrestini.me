import React from 'react'
import styled from 'styled-components'

import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
`

const Home = () => (
  <Container>
    <Content>
      <LeftSide />
      <RightSide />
    </Content>

  </Container>
)

export default Home
