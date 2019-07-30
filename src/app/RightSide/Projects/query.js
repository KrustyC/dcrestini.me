import gql from 'graphql-tag';

const GET_PROJECTS = gql`
  query Projects {
    allProjects {
      edges {
        node {
          title
          url {
            ... on _ExternalLink {
              url
            }
          }
          github_link {
            ... on _ExternalLink {
              url
            }
          }
          content
        }
      }
    }
  }
`;

export default GET_PROJECTS;
