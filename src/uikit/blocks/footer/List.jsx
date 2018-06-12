import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ children }) => <li>{children}</li>

const List = ({ children }) => <ul>{children}</ul>

Item.propTypes = {
  children: PropTypes.any.isRequired
}

List.propTypes = {
  children: PropTypes.any.isRequired
}

List.Item = Item
export default List
