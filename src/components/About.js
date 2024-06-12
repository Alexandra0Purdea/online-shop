import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const About = () => (
  <AboutContainer>
    <h2>About Us</h2>
    <p>We are dedicated to providing the best service.</p>
  </AboutContainer>
);

export default About;
