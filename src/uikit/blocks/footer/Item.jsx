import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ children }) => <li>{children}</li>

Item.propTypes = {
  children: PropTypes.any.isRequired
}

export default Item
