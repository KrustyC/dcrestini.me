import React from 'react'
import PropTypes from 'prop-types'

const BottomContent = ({ children }) => <div className="content has-text-centered">{children}</div>

BottomContent.propTypes = {
  children: PropTypes.any.isRequired
}

export default BottomContent
