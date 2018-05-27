import React from 'react'
import PropTypes from 'prop-types'

const CardMedia = ({ children }) => (
  <div className="media">
    {children}
  </div>
)

CardMedia.propTypes = {
  children: PropTypes.any.isRequired
}

export default CardMedia
