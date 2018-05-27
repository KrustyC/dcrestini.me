import React from 'react'
import PropTypes from 'prop-types'

const CardMediaItem = ({ children, position }) => (
  <div className={`media-${position}`}>
    {children}
  </div>

)

CardMediaItem.propTypes = {
  position: PropTypes.oneOf(['left', 'content']).isRequired,
  children: PropTypes.any.isRequired
}

export default CardMediaItem
