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
  margin: 0 0 14em;
  padding:0em;
  font-size: 18px;
 }
img[src*="/images/logo.png"] {
  width:150% ;
  height:90%;
}
`;
const Img = styled.div`
padding: 2em 4px 12em 2em;
margin:1em 1em 10em 0.1em;
float: right;
@media only screen and (max-width: 768px){
  width: 12em;
  position: absolute;
  margin: 12em 0 0 0;
  display: inline-block;
  float: left;
  left:0;
 }
`;
const Textbox = styled.div`
width: 100%;
margin:1em 2em 1em;
float: right;
`;
export default Infoplacard2;
