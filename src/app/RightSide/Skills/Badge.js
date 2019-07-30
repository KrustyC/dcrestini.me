import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


// Badge img {
//   float: left;
//   margin: 0 10px 0 -25px;
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
// }

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  font-size: 12px;
  height: 25px;
  border-radius: 25px;
  background-color: #f1f1f1;
  margin-right: 5px;
`

const Badge = ({ text }) => (
  <Div>
    {text}
  </Div>
)

Badge.propTypes = {
  text: PropTypes.string.isRequired
}

export default Badge
