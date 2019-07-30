import React, { useState } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';

import About from './About';
import Projects from './Projects';
import Skills from './Skills';

// import ReadingList from './ReadingList'
// import Education from './Education'
import Footer from './Footer';

const Layout = styled.div`
  flex: 4;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #ffffff;
  color: #000000;
  max-width: 100%;
`;

const RightSide = () => {
  const [isSkillSectionVisible, setIsSkillSectionVisible] = useState(false);

  const onEnterSkillSection = () => setIsSkillSectionVisible(true);

  const onLeaveSkillSection = () => setIsSkillSectionVisible(false);

  return (
    <Layout>
      <About id="about" />
      <Projects id="projects" shadowed />
      <Projects id="projects" />
      <Projects id="projects" shadowed />
      <Waypoint onEnter={onEnterSkillSection} onLeave={onLeaveSkillSection}>
        <div>
          <Skills id="skills" isVisible={isSkillSectionVisible} />
        </div>
      </Waypoint>
      {/*
          <Education id="education" shadowed />
          <ReadingList id="reading-list" />
          */}
      <Footer id="footer" shadowed />
    </Layout>
  );
};

export default RightSide;
