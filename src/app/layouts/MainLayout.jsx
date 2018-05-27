import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Navbar from 'app/shared-components/navbar'
import Footer from 'app/shared-components/footer'

const MainLayout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
)

MainLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default MainLayout
