import React from 'react';
import styled from 'styled-components';

const Infoplacard = (props)=> {
  return(
        <>
        <Container>
        <h2>Watch everywhere.</h2>
        <p2>Stream unlimited movies and TV shows on</p2><br/>
        <p2>your phone, tablet, laptop, and TV.</p2>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
padding-top:1em;
padding-left:14em;
padding-bottom: 2em;
border-top:solid hsla(0, 0%, 50%,30%) 8px;
border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
`;
export default Infoplacard;
