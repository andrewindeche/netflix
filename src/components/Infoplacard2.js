import React from 'react';
import styled from 'styled-components';

const Infoplacard2 = () => {
  return (
    <>
      <Container>
        <Img>
          <img src='/images/logo.png' alt='netflix kids' />
        </Img>
        <Textbox>
          <h1 id='intro-text'>Create profiles for kids.</h1>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </Textbox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 3em;
  gap: 3em;
  @media only screen and (max-width: 768px) {
    margin: 0 0 14em;
    padding: 3em;
  }
  img[src*='/images/logo.png'] {
    width: 100%; /* Adjusted to maintain proportion */
    height: auto; /* Adjusted to maintain proportion */
  }
`;

const Img = styled.div`
  padding: 2em 0; 
  margin: 1em 0;
  @media only screen and (max-width: 768px) {
    width: 12em;
    margin: 23em 0 0 0;
    position: absolute;
    left: 0;
  }
`;

const Textbox = styled.div`
  flex: 1; /* Ensures it takes the remaining space */
  margin: 1em 0;
  p{
    font-size:18px
  }
`;

export default Infoplacard2;
