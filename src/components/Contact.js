import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Us</h2>
    <p>Feel free to reach out with any questions.</p>
  </ContactContainer>
);

export default Contact;
