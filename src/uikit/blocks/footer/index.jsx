import React from 'react'
import PropTypes from 'prop-types'

import Addons from './Addons'
import BottomContent from './BottomContent'
import Heading from './Heading'
import List from './List'

const Footer = ({ children }) => (
  <footer className="footer">
    <div className="container">
      {children}
    </div>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.any.isRequired
}

Footer.BottomContent = BottomContent
Footer.Addons = Addons
Footer.Heading = Heading
Footer.List = List

export default Footer
