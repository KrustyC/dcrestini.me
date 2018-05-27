import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import Body from './Body'
import Content from './Content'
import Image from './Image'
import Media from './Media'
import MediaItem from './MediaItem'


const Div = styled.div`
  height: ${prop('height', '400px')};
  width: ${prop('width', '400px')};
`

const Card = ({ children, ...rest }) => (
  <Div className="card" {...rest}>
    {children}
  </Div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Body = Body
Card.Content = Content
Card.Image = Image
Card.Media = Media
Card.MediaItem = MediaItem

export default Card
