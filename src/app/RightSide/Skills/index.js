import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'components/Section';
import Areas from './Areas';
import Skill from './Skill';

const skills = [
  { skill: 'Frontend', level: '90' },
  { skill: 'Backend', level: '80' },
  { skill: 'Databases', level: '65' },
  { skill: 'Testing', level: '75' },
  { skill: 'DevOps', level: '50' },
  { skill: 'Teamwork', level: '95' },
];

const TwoSide = styled.div`
  width: 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
`;

const Skills = ({ id, isVisible, shadowed }) => (
  <Section id={id} title="Skills" shadowed={shadowed}>
    <TwoSide>
      <Side>
        {skills.map(({ skill, level, color }) => (
          <Skill
            key={skill}
            skill={skill}
            level={isVisible ? parseInt(level, 10) : 0}
            color={color}
          />
        ))}
      </Side>
      <Side>
        <Areas />
      </Side>
    </TwoSide>
  </Section>
);

Skills.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

Skills.defaultProps = {
  shadowed: false,
};

export default Skills;
