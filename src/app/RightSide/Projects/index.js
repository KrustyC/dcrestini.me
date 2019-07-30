import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Section from 'components/Section';
import Project from './Project';
import GET_PROJECTS from './query';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 30px;
`;

const Projects = ({ id, shadowed }) => (
  <Section id={id} title="Projects & Libraries" shadowed={shadowed}>
    <Query query={GET_PROJECTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Grid>
            {data.allProjects.edges.map(({ node: project }) => (
              <Project key={Math.random()} project={project} />
            ))}
          </Grid>
        );
      }}
    </Query>
  </Section>
);

Projects.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Projects.defaultProps = {
  shadowed: false,
};

export default Projects;
