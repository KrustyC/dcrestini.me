import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Section = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${prop('theme.colors.primary', '#FFF')};

  h1 {
    color: ${prop('theme.colors.light', '#FFF')};
  }
`

const Interests = () => (
  <Section>
    <div className="container has-text-centered">
      <h1 className="title">My Interests</h1>
    </div>
  </Section>
)

export default Interests
