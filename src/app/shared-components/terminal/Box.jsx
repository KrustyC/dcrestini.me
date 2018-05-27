import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import styled from 'styled-components'

const AnimatedBox = styled(posed.div({
  draggable: true,
  visible: { scaleY: 1, opacity: 1 },
  hidden: {
    scaleY: 0,
    opacity: 0
  }
}))`
  position: absolute;
  left: 30%;
  top: 200px;
  transform: translateX(-50%);
  z-index: 1000;
  margin: auto;

  .ReactBash {
    height: 500px !important;
    width: 800px !important;
    border: 1px solid lightgrey;

    div {
      overflow: hidden !important;
    }
  }
`

const Box = ({ isVisible, children }) => (
  <AnimatedBox pose={isVisible ? 'visible' : 'hidden'}>
    {children}
  </AnimatedBox>
)

Box.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired
}

export default Box

