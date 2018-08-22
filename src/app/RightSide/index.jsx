import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

import About from './About'
import Projects from './Projects'
import Skills from './Skills'

// import ReadingList from './ReadingList'
// import Education from './Education'

const Layout = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: none;
  background: #FFFFFF;
  color: #000000;
`

const Scroll = styled.div`
  min-width: 100%;
  overflow-y: scroll;
`

export default class RightSide extends Component {
  state = {
    isSkillSectionVisible: false
  }

  onEnterSkillSection = () => this.setState({ isSkillSectionVisible: true })

  onLeaveSkillSection = () => this.setState({ isSkillSectionVisible: false })

  render() {
    return (
      <Layout>
        <Scroll id="scrollable">
          <About id="about" />
          <Projects id="projects" shadowed />
          <Waypoint onEnter={this.onEnterSkillSection} onLeave={this.onLeaveSkillSection}>
            <div>
              <Skills id="skills" isVisible={this.state.isSkillSectionVisible} />
            </div>
          </Waypoint>
          {/*
          <Education id="education" shadowed />
          <ReadingList id="reading-list" />
          */}
        </Scroll>
      </Layout>
    )
  }
}
