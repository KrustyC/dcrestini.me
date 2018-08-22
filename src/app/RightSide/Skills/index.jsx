import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import map from 'lodash/map'

import Section from '../components/Section'
import Skill from './Skill'
import skills from './skills'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Skills = ({ id, isVisible, shadowed }) => (
  <Section id={id} title="Skills" shadowed={shadowed}>
    <Div>
      {map(skills, ({ skill, level, color }, i) => (
        <Skill
          key={i}
          skill={skill}
          level={isVisible ? parseInt(level, 10) : 0}
          color={color}
        />
      ))}
    </Div>
  </Section>
)

Skills.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
}

Skills.defaultProps = {
  shadowed: false
}


export default Skills
