import React from 'react'
import styled from 'styled-components'

import githubIcon from './icons/github.svg'
import linkedinIcon from './icons/linkedin.svg'

const Layout = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5675E;
  font-family: 'Special Elite';
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 15;
`

const Spacer = styled.hr`
  width: 70%;
  margin: 10px 0px 20px 0px;
`

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    margin-right: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 0px;
`

const Subtitle = styled.h3`
  font-style: italic;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`

const LeftSide = () => (
  <Layout>
    <Description>
      <Title>
        Hi there! I'm Davide!
      </Title>
      <Subtitle>
        I'm a Full Stack Developer, from London.
      </Subtitle>
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
      <span>About</span>
      {/* <span>Portofolio</span>
      <span>Education</span>
      <span>Reading List</span>
      <span>Contact</span> */}
    </Buttons>
  </Layout>
)

export default LeftSide
