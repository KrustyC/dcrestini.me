import React from 'react'
import styled from 'styled-components'

import About from './About'
// import Projects from './Projects'
// import ReadingList from './ReadingList'
// import Education from './Education'
// import Skills from './Skills'

const Layout = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: none;
  background: #FFFFFF;
  color: #000000;
`

const RightSide = () => (
  <Layout>
    <div style={{ minWidth: '100%' }}>
      <About />
      ...work in progress
      {/* <Projects shadowed />
      <Skills />
      <Education shadowed />
      <ReadingList /> */}
    </div>
  </Layout>
)

export default RightSide
