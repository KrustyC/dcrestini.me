import React from 'react'
import { MainLayout } from 'app/layouts'

import Description from './description'
import Interests from './interests'
import ReadingList from './reading-list'

const About = () => (
  <MainLayout>
    <Description />
    <Interests />
    {/*<ReadingList /> */}
  </MainLayout>
)

export default About

