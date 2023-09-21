import React from 'react';
import styled from 'styled-components';

const Infoplacard2 = ()=> {
  return(
        <>
        <Container>
        <Img>
          <img src ='/images/logo.png' alt="netflix kids"/>
          </Img>
          <Textbox>
          <h1 id="intro-text">Create profiles for kids.</h1>
            Send kids on adventures with their favorite<br/>
            characters in a space made just for them—<br/>
            free with your membership.
          </Textbox>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
position: relative;
display:flex;
margin:1em 3em;
gap:3em;
@media only screen and (max-width: 768px){
  display: flex;
  flex-flow: column;
  margin:auto;
 }
img[src*="/images/logo.png"] {
  width:150% ;
  height:90%;
}
`;
const Img = styled.div`
padding:1em 2em;
margin:1em 1em 1em 0.1em;
float: right;
`;
const Textbox = styled.div`
width: 100%;
margin:1em 2em 1em;
float: right;
`;
export default Infoplacard2;
