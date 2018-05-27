import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  :hover {
    background-color: transparent !important;
  }
`

const Button = ({ onClick, isText, children }) => (
  <StyledButton onClick={onClick} className={`button is-outlined ${isText ? 'is-text' : ''}`}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  isText: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  isText: false
}

export default Button
