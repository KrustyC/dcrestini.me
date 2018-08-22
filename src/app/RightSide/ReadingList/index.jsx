import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Section from '../components/Section'

const ReadingList = ({ shadowed }) => (
  <Section title="Reading List" shadowed={shadowed}>
    What an exciting reading list
  </Section>
)

ReadingList.propTypes = {
  shadowed: PropTypes.bool
}

ReadingList.defaultProps = {
  shadowed: false
}

export default ReadingList
