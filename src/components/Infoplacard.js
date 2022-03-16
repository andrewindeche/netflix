import React from 'react';
import styled from 'styled-components';

const Infoplacard = (props)=> {
  return(
        <>
        <Container>
        <h2>Watch everywhere.</h2>
        <p>Stream unlimited movies and TV shows on</p>
        <p>your phone, tablet, laptop, and TV.</p>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
padding-top:1em;
padding-left:14em;
padding-bottom: 2em;
border-bottom:solid gray 6px;
`;
export default Infoplacard;
