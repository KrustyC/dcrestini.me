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

  ${({ level, color }) => css`
    background: ${color};
    width: ${level}%;
    transition: width 2s ease-in-out;
    color: white;
  `}
`

const SkillBar = ({ level, color }) => (
  <Container>
    <Level level={level} color={color}>
      {level > 10 && `${level}%`}
    </Level>
  </Container>
)

SkillBar.propTypes = {
  level: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default SkillBar
