
import map from 'lodash/map'
import React, { Component } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import Finished from './Finished'
import Reading from './Reading'
import ToRead from './ToRead'

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  overflow: auto;
  padding-top: 50px;
  padding-bottom: 840px;
  background-color: ${prop('theme.colors.dark')};
  color: ${prop('theme.colors.light')};

  h1 {
    color: ${prop('theme.colors.light')};
  }
`

const Tabs = styled.div`
  a {
    color: ${prop('theme.colors.light')};
    border-bottom-color: ${prop('theme.colors.light')};

    &.is-active {
      border-bottom-color: ${prop('theme.colors.accent')};
    }
  }
`

const READING = 1
const FINISHED = 2
const TO_READ = 3

const types = [
  { id: READING, label: 'READING NOW' },
  { id: FINISHED, label: 'FINISHED' },
  { id: TO_READ, label: 'TO READ' }
]

export default class ReadingList extends Component {
  state = {
    activeTab: 1
  }

  switchTab(newId) {
    this.setState({ activeTab: newId })
  }

  render() {
    const { activeTab } = this.state

    return (
      <Section>
        <div className="container">
          <h1 className="title">Reading List</h1>
          <br />
          <Tabs className="tabs is-centered is-fullwidth">
            <ul>
              {map(types, ({ id, label }) => (
                <li className={activeTab === id ? 'is-active' : null} key={id}>
                  {/* eslint-disable-next-line */}
                  <a onClick={() => this.switchTab(id)}>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Tabs>
          <div>
            {activeTab === READING && <Reading />}
            {activeTab === FINISHED && <Finished />}
            {activeTab === TO_READ && <ToRead />}
          </div>
        </div>
      </Section>
    )
  }
}
