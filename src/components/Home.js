import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Home = () => (
  <HomeContainer>
    <h2>Welcome to MyApp</h2>
    <p>Your gateway to a seamless experience.</p>
  </HomeContainer>
);

export default Home;
