import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';

const Education = ({ id, shadowed }) => (
  <Section id={id} title="Education" shadowed={shadowed}>
    My Education
  </Section>
);

Education.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Education.defaultProps = {
  shadowed: false,
};

export default Education;
