import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import map from 'lodash/map'
import Section from '../components/Section'
import Project from './Project'
import projects from './projects'

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 30px;
`

const Projects = ({ id, shadowed }) => (
  <Section id={id} title="Projects" shadowed={shadowed}>
    <Grid>
      {map(projects, (project, i) => <Project key={i} project={project} />)}
    </Grid>
  </Section>
)

Projects.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired
}

Projects.defaultProps = {
  shadowed: false
}

export default Projects
