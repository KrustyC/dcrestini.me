import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Section from './components/Section'

const Skills = ({ shadowed }) => (
  <Section title="Skills" shadowed={shadowed}>
    My Skills
  </Section>
)

Skills.propTypes = {
  shadowed: PropTypes.bool
}

Skills.defaultProps = {
  shadowed: false
}


export default Skills
