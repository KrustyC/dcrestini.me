import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PolaroidDiv = styled.div`
  background: #fff;
  width: 350px;
  padding: 11px;
  margin: 10px;
  text-align: center;
  box-shadow: 5px 5px 5px #888;
  transform: rotate(-5deg);

  span {
    font: 400 18px/1 'Kaushan Script', cursive;
    color: #888;
  }
`

const Polaroid = ({ description, image }) => (
  <PolaroidDiv>
    <img src={image} alt="profile" />
    <span>{description}</span>
  </PolaroidDiv>
)

Polaroid.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Polaroid
