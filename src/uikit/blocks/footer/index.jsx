import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Addons from './Addons'
import BottomContent from './BottomContent'
import Heading from './Heading'
import List from './List'

const FooterContainer = styled.footer`
  padding: 2rem 1.5rem 4rem;
`

const Footer = ({ children }) => (
  <FooterContainer className="footer">
    <div className="container">
      {children}
    </div>
  </FooterContainer>
)

Footer.propTypes = {
  children: PropTypes.any.isRequired
}

Footer.BottomContent = BottomContent
Footer.Addons = Addons
Footer.Heading = Heading
Footer.List = List

export default Footer
