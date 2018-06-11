
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
  min-height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${prop('theme.colors.light', '#FFF')};
`

const READING = 1
const FINISHED = 2
const TO_READ = 3

const types = [
  { id: READING, label: 'Reading Now' },
  { id: FINISHED, label: 'Finished' },
  { id: TO_READ, label: 'To Read' }
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
          <h1 className="title">My reading list</h1>
          <br />
          <div className="tabs is-toggle is-fullwidth">
            <ul>
              {map(types, ({ id, label }) => (
                <li className={activeTab === id ? 'is-active' : null}>
                  {/* eslint-disable-next-line */}
                  <a onClick={() => this.switchTab(id)}>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
