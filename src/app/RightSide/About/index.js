import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { emojify } from 'react-emojione';

import Section from '../components/Section';
import ExternalLink from '../../components/ExternalLink';

const P = styled.p`
  font-size: 17px;

  a {
    color: ${prop('theme.colors.link')};
    text-decoration: none;
  }
`;

const About = ({ id, shadowed }) => (
  <Section id={id} title="A little about me" shadowed={shadowed}>
    <P>
      I was born and grew up in{' '}
      <ExternalLink href="https://en.wikipedia.org/wiki/Sansepolcro">
        Sansepolcro
      </ExternalLink>{' '}
      a small village on the edge of <b>Tuscany</b>, very close to <b>Umbria</b>
      . I lived there until I was 18 when I decided to move to Bologna to study{' '}
      <b>Computer Science</b>. I gruadate in December 2016 and two months later
      I decided to move to London, to improve my english and challenge myself in
      a fast pace and competitive environment. I{"'"}m currently employed as as
      Full Stack PHP Developer at{' '}
      <ExternalLink href="https://www.learningladders.info/">
        Learning Ladders
      </ExternalLink>
      and I{"'"}m working on{' '}
      <ExternalLink href="https://gomuso.io/">Muso</ExternalLink> together with
      my friend{' '}
      <b>
        <ExternalLink href="http://www.davidfloegel.com/">David</ExternalLink>.
      </b>
      <br />
      <br />
      During my spare time I enojy coding, playing football, basketball, tennis,
      read some books and have a beer ({emojify(':beers:')}) or a glass of wine
      with my girlfriend and my friends. 2 ago years I completed my first{' '}
      <ExternalLink href="https://www.spartan.com/en">
        Spartan Race
      </ExternalLink>{' '}
      and I{"'"}m planning to do more as soon as possible. I also love
      travelling!
      <br />
      <br />
      Back in October 2017 I started volounteering as a mentor at{' '}
      <ExternalLink href="https://codeyourfuture.io/">
        Code Your Future
      </ExternalLink>{' '}
      which is an amazing charity that helps refugees learn how to code and get
      a job in the technology industry!
    </P>
  </Section>
);

About.propTypes = {
  id: PropTypes.string.isRequired,
  shadowed: PropTypes.bool,
};

About.defaultProps = {
  shadowed: false,
};

export default About;
