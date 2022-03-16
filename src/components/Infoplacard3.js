import React from 'react';
import styled from 'styled-components';

const Infoplacard2 = (props)=> {
  return(
        <>
          <Container>
          <H2>
          <h2>Have an Android</h2>
          <h2>Phone?Get our new</h2>
          <h2>free plan!</h2>
          </H2>
          <br/>
          <p>Watch a selection of new movies and TV</p>
          <p>shows without adding any payment details!</p>
          <p1>Get the app > </p1>
        </Container>
        <Img>
          <img src ='/images/en.png' alt=""/>
          </Img>
          <Border></Border>
        </>
      );
    }
const Container = styled.div`
padding-left:12em;
padding-top:2em;
position:absolute;
padding-bottom: 2em;
`;
const Border = styled.div`
padding-top:16em;
border-bottom:solid gray 6px;
padding-bottom: 2em;
`;
const H2 = styled.div`
line-height: 0.2em;
`;
const Img = styled.div`
text-align: left;
float:right;
position: relative;
display:inline-block;
padding-top:4em;
padding-right:16em;
position:relative;
padding-bottom:3em;
`;
export default Infoplacard2;
