import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

const SectionLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 40px 20px 40px;
  background: ${ifProp({ shadowed: true }, '#F9F6F5', '#FFFFFF')};
  color: #000000;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 0px;
`

const Div = styled.div`
  display: flex;
  width: 100%;
`

const Section = ({ title, shadowed, children }) => (
  <SectionLayout shadowed={shadowed}>
    <Title>
      {title}
    </Title>
    <Div>
      {children}
    </Div>
  </SectionLayout>
)

Section.propTypes = {
  shadowed: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

Section.defaultProps = {
  shadowed: false
}

export default Section
