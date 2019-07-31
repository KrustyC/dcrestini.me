import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkIcon from 'assets/img/icons/link.svg';
import GithubIcon from 'assets/img/icons/github.svg';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a:nth-of-type(2) {
      margin-left: 15px;
    }
  }
`;

const Icon = styled.img`
  width: 15px;
`;

const Text = styled.p`
  display: flex;
  text-align: justify;
  font-size: 14px;
`;

const Project = ({ project }) => (
  <Container>
    <Title>
      <h3>{project.title[0].text}</h3>
      <div>
        {project.url && (
          <a href={project.url.url} target="_blank" rel="noopener noreferrer">
            <Icon src={LinkIcon} />
          </a>
        )}
        {project.github_link && (
          <a
            href={project.github_link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={GithubIcon} />
          </a>
        )}
      </div>
    </Title>
    <Text>{project.content[0].text}</Text>
  </Container>
);

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    url: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    github_link: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Project;
