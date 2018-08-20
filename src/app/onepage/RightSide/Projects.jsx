import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import map from 'lodash/map'
import Section from './components/Section'

const projects = [
  {
    title: 'Muso',
    description: 'Bla bla bla'
  },
  {
    title: 'GraphQL & NodeJs Boilerplate',
    description: 'Bla bla bla'
  },
  {
    title: 'React Checkbox',
    description: 'Bla bla bla'
  },
  {
    title: 'React Router v4 Tutorial',
    description: 'Bla bla bla'
  }
]

const Projects = ({ shadowed }) => (
  <Section title="Projects and stuff" shadowed={shadowed}>
    <ul>
      {map(projects, (project, i) => (
        <li key={i}>
          {project.title}
        </li>
      ))}
    </ul>
  </Section>
)

Projects.propTypes = {
  shadowed: PropTypes.bool
}

Projects.defaultProps = {
  shadowed: false
}

export default Projects
