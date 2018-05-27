import React from 'react'
import { MainLayout } from 'app/layouts'

import Description from './Description'
import Interests from './Interests'
import ReadingList from './ReadingList'

const About = () => (
  <MainLayout>
    <Description />
    <Interests />
    <ReadingList />
  </MainLayout>
)

export default About

