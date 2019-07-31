import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'components/Section';

const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  :nth-of-type(2) {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0;
  }

  span {
    font-size: 14px;
  }
`;

const Subtitle = styled.span`
  color: #696969;
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
`;

const Text = styled.p`
  display: flex;
  text-align: justify;
  font-size: 14px;
  margin-top: 7px;
`;

const Education = ({ id, shadowed }) => (
  <Section id={id} title="Education" shadowed={shadowed}>
    <Flex>
      <Container>
        <Title>
          <h4>Bachelor{"'"}s degree in Computer Science</h4>
          <span>Univeristy of Bologna</span>
        </Title>
        <Subtitle>Mark: 110/100 cum Laude</Subtitle>
        <Text>
          Here I studied a wide range of subjects, which helped me improving my
          logical thinking and taught me how to tackle new problems. During
          University I also developed a few projects with some of my fellow
          students.
        </Text>
      </Container>
      <Container>
        <Title>
          <h4>High school diploma</h4>
          <span>ITC Fra{"'"} Luca Pacioli, Sansepolcro, Italy</span>
        </Title>
        <Subtitle>Mark: 100/100</Subtitle>
        <Text>
          Here is where I learned the basics of software development. I learned
          how to build console application in C# and towards the end of the
          shcool I started building a few UI components as well.
        </Text>
      </Container>
    </Flex>
  </Section>
);

Education.propTypes = {
  shadowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Education.defaultProps = {
  shadowed: false,
};

export default Education;
