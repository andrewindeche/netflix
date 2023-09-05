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
          <h1>Create profiles for kids.</h1>
          <p2>Send kids on adventures with their favorite</p2><br/>
          <p2>characters in a space made just for them—</p2><br/>
          <p2>free with your membership.</p2>
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
gap:2em;
border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
img[src*="/images/logo.png"] {
  max-width:190% ;
  max-height:90%;
}
`;
const Img = styled.div`
padding:1em 2em;
margin:1em 1em 1em 0.1em;
float: right;
`;
const Textbox = styled.div`
width: 100%;
margin:1em 3em 1em;
float: right;
`;
export default Infoplacard2;
