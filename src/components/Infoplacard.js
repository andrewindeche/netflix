import React from 'react';
import styled from 'styled-components';

const Infoplacard = ()=> {
  return(
        <>
        <Container>
        <h1 id="intro-text">Watch everywhere.</h1>
        <p>Stream unlimited movies and TV shows on</p><br/>
        <p>your phone, tablet, laptop, and TV.</p>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
padding-top:1em;
padding-left:14em;
padding-bottom: 4em;
border-top:solid hsla(0, 0%, 50%,30%) 8px;
border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
`;
export default Infoplacard;
