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
          <p>Send kids on adventures with their favorite</p><br/>
          <p>characters in a space made just for them—</p><br/>
          <p>free with your membership.</p>
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
