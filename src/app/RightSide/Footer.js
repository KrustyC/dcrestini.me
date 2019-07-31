import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'components/Section';
import ExternalLink from 'components/ExternalLink';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 12px;
  }
`;

const Footer = ({ id, shadowed }) => (
  <Section id={id} shadowed={shadowed}>
    <Div>
      <p>
        Developed with{' '}
        <ExternalLink href="https://reactjs.org/">React</ExternalLink> &{' '}
        <ExternalLink href="https://www.styled-components.com/">
          Styled Components
        </ExternalLink>
      </p>
      <p>
        View source on{' '}
        <ExternalLink href="https://github.com/KrustyC/dcrestini.me">
          GitHub
        </ExternalLink>
      </p>
    </Div>
  </Section>
);

Footer.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  shadowed: false,
};

export default Footer;
