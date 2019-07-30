import React, { Fragment } from 'react';
import styled from 'styled-components';
import Badge from './Badge';

const areas = [
  {
    title: 'Languages & Markup',
    values: ['Javascript', 'Pyhton', 'PHP', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    values: ['React', 'ExpressJs', 'Laravel', 'Symfony'],
  },
  {
    title: 'Databases',
    values: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Testing',
    values: ['Jest', 'PHPUnit', 'unittest'],
  },
  {
    title: 'DevOps',
    values: ['CircleCI', 'Docker', 'Chef Recipes'],
  },
  {
    title: 'Others',
    values: ['Aws', 'GitHub', 'Webpack', 'REST', 'GraphQL'],
  },
];

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 25px 0 5px;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Areas = () => (
  <Fragment>
    {areas.map(({ title, values }) => (
      <Div key={title}>
        <h4>{title}</h4>
        <Badges>
          {values.map(text => (
            <Badge key={text} text={text} />
          ))}
        </Badges>
      </Div>
    ))}
  </Fragment>
);

export default Areas;
