import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  & > a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

const Header = () => (
  <NavBar>
    <h1>Candle Shop</h1>
    <NavLinks>
      <Link to="/">Home</Link>
    </NavLinks>
  </NavBar>
);

export default Header;
