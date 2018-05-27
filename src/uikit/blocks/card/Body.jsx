import React from 'react'
import PropTypes from 'prop-types'

const CardBody = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.any.isRequired
}

export default CardBody
