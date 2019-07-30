import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import AnchorLink from 'components/AnchorLink';
import githubIcon from './icons/github.svg';
import linkedinIcon from './icons/linkedin.svg';

const Layout = styled.div`
  flex: 3;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5675e;
  font-family: 'Special Elite';
  max-width: 100%;
  height: 100vh;

  ${media.greaterThan('medium')`
    position: sticky;
    top: 0px;
  `}

  ${media.lessThan('medium')`
    height: 100vh;
    padding: 0 10px;
  `}
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 15;
`;

const Spacer = styled.hr`
  width: 70%;
  margin: 10px 0px 20px 0px;
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;

  a {
    margin-right: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: #e3e2e5;
    }
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 0px;
`;

const Subtitle = styled.h3`
  font-style: italic;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const LeftSide = () => (
  <Layout>
    <Description>
      <Title>Hi there! I{"'"}m Davide!</Title>
      <Subtitle>I{"'"}m a Full Stack Developer, from London.</Subtitle>
      <Spacer />
      <div>
        <a href="https://www.linkedin.com/in/davide-crestini-833aa011a/">
          <Icon src={linkedinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/KrustyC">
          <Icon src={githubIcon} alt="github" />
        </a>
      </div>
    </Description>
    <Buttons>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#skills">Skills</AnchorLink>
      {/* <span>Education</span>
      <span>Reading List</span> */}
    </Buttons>
  </Layout>
);

export default LeftSide;
