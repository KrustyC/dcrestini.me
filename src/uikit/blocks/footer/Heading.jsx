import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2 = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
`

const Heading = ({ children }) => <H2>{children}</H2>

Heading.propTypes = {
  children: PropTypes.string.isRequired
}

export default Heading
