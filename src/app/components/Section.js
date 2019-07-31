import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { ifProp } from 'styled-tools';

const SectionLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${ifProp({ shadowed: true }, '#F9F6F5', '#FFFFFF')};
  color: #000000;
  padding: 20px 40px;
  width: 100%;

  ${media.lessThan('medium')`
    padding: 20px 20px;
  `}
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 0px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
`;

const Section = ({ id, title, shadowed, children }) => (
  <SectionLayout id={id} shadowed={shadowed}>
    {title && <Title>{title}</Title>}
    <Div>{children}</Div>
  </SectionLayout>
);

Section.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Section.defaultProps = {
  title: null,
  shadowed: false,
};

export default Section;
