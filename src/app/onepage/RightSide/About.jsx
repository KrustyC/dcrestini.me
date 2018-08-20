import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { emojify } from 'react-emojione'

import Section from './components/Section'

const P = styled.p`
  font-size: 17px;

  a {
    color: ${prop('theme.colors.link')};
    text-decoration: none;
  }
`

const About = ({ shadowed }) => (
  <Section title="A little about me" shadowed={shadowed}>
    <P>
      I was born and grew up in
      {' '}
      <a href="https://en.wikipedia.org/wiki/Sansepolcro" target="_blank" rel="noopener noreferrer">
        Sansepolcro
      </a> a small village on the edge of <b>Tuscany</b>, very close to <b>Umbria</b>.
      I lived there until I was 18
      when I decided to move to Bologna to study <b>Computer Science</b>. I gruadate in December
      2016 and two months later I decided to move to London, to improve my english and challenge
      myself in a fast pace and competitive environment. I'm currently employed as as Full Stack PHP
      Developer at <a href="https://www.learningladders.info/" target="_blank" rel="noopener noreferrer">Learning Ladders</a> and I'm working
      on <a href="https://gomuso.io/" target="_blank" rel="noopener noreferrer">>Muso</a> together with my
      friend <b><a href="http://www.davidfloegel.com/" target="_blank" rel="noopener noreferrer">>@david</a>.</b>
      <br /><br />
      During my spare time I enojy coding, playing {emojify(':soccer:')} and {emojify(':basketball:')},
      read some books and have a {emojify(':beers:')} or
      a {emojify(':wine_glass:')} with my girlfriend and my friends. 2 ago years I completed my
      first <a href="https://www.spartan.com/en">Spartan Race</a> and I'm planning to do more as
      soon as possible. I also love travelling!{emojify(':airplane_small:')}
      <br /><br />
      Back in October 2017 I started volounteering as a  mentor at <a href="https://codeyourfuture.io/">Code Your Future</a>
      {' '} which is an amazing charity that helps refugees learn how to code and get a job in the
      technology industry!
    </P>
  </Section>
)

About.propTypes = {
  shadowed: PropTypes.bool
}

About.defaultProps = {
  shadowed: false
}


export default About
