import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomContent = ({ children }) => <Div className="content">{children}</Div>

BottomContent.propTypes = {
  children: PropTypes.any.isRequired
}

export default BottomContent
