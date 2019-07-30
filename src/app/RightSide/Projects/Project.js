import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0;
  }

  div {
    a:nth-of-type(1) {
      margin-right: 15px;
    }
  }
`

const Icon = styled.img`
  width: 15px;
`

const Text = styled.p`
  display: flex;
  text-align: justify;
  font-size: 14px;
`


const Project = ({ project }) => (
  <Container>
    <Title>
      <h3>{project.title}</h3>
      <div>
        {project.link && (
          <a href={project.link}>
            <Icon src={require('../../../assets/img/icons/link.svg')} />
          </a>
        )}
        {project.code && (
          <a href={project.code}>
            <Icon src={require('../../../assets/img/icons/github.svg')} />
          </a>
        )}
      </div>
    </Title>
    <Text>{project.description}</Text>
  </Container>
)

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    code: PropTypes.string
  }).isRequired
}

export default Project
