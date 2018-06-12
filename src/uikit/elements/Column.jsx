import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children, columns }) => <div className={`column is-${columns}`}>{children}</div>

Column.propTypes = {
  children: PropTypes.any.isRequired,
  columns: PropTypes.number.isRequired
}

export default Column
