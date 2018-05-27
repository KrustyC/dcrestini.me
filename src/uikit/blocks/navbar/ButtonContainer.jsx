import React from 'react'
import PropTypes from 'prop-types'

const ButtonContainer = ({ children }) => (
  <div className="navbar-item">
    <div className="field is-grouped">
      <p className="control">
        {children}
      </p>
    </div>
  </div>
)

ButtonContainer.propTypes = {
  children: PropTypes.any.isRequired
}

export default ButtonContainer
