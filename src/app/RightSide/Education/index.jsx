import React from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'

const Education = ({ shadowed }) => (
  <Section title="Education" shadowed={shadowed}>
    My Education
  </Section>
)

Education.propTypes = {
  shadowed: PropTypes.bool
}

Education.defaultProps = {
  shadowed: false
}

export default Education
