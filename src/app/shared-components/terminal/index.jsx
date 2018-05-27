import React from 'react'
import PropTypes from 'prop-types'
import ReactTerminal from 'react-bash'

import Box from './Box'
import { extensions, history, structure } from './config'

const Terminal = ({ isVisible }) => (
  <Box isVisible={isVisible}>
    <ReactTerminal
      prefix="user@dcrestini"
      history={history}
      structure={structure}
      extensions={extensions}
    />
  </Box>
)

Terminal.propTypes = {
  isVisible: PropTypes.bool.isRequired
}

export default Terminal
