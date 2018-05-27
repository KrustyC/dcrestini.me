import React from 'react'
import PropTypes from 'prop-types'

const CardImage = ({ img, alt }) => (
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={img} alt={alt} />
    </figure>
  </div>
)

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default CardImage
