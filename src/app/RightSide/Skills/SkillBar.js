import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: #ECEDEB;
  height: 25px;
`

const Level = styled.div`
  text-align: right;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  font-size: 12px;

  ${({ level }) => css`
    background: #03A9F4;
    width: ${level}%;
    transition: width 2s ease-in-out;
    color: white;
  `}
`

const SkillBar = ({ level }) => (
  <Container>
    <Level level={level} >
      {level > 10 && `${level}%`}
    </Level>
  </Container>
)

SkillBar.propTypes = {
  level: PropTypes.number.isRequired
}

export default SkillBar
