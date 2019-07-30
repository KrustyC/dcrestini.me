import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SkillBar from './SkillBar';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
  }
`;

const Skill = ({ skill, level }) => (
  <Div>
    <h4>{skill}</h4>
    <SkillBar level={level} />
  </Div>
);

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Skill;
