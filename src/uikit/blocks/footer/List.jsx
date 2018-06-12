import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const LI = styled.li`
  line-height: 45px;

  i {
    font-size: 22px !important;
    width: 24px;
    color: ${prop('theme.colors.primary')}
  }

  a {
    color: ${prop('theme.colors.dark')};
    
    &:hover {
      color: ${prop('theme.colors.link')};
    }
  }
`

const Item = ({ children }) => <LI>{children}</LI>

const List = ({ children }) => <ul>{children}</ul>

Item.propTypes = {
  children: PropTypes.any.isRequired
}

List.propTypes = {
  children: PropTypes.any.isRequired
}

List.Item = Item
export default List
