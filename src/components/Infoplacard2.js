import React from 'react';
import styled from 'styled-components';

const Infoplacard2 = (props)=> {
  return(
        <>
        <Img>
          <img src ='/images/logo.jpg' alt=""/>
          </Img>
          <Container>
          <h2>Create profiles for kids.</h2>
          <p>Send kids on adventures with their favorite</p>
          <p>characters in a space made just for them—free</p>
          <p>with your membership.</p>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
float:right;
position: relative;
display:inline-block;
padding-top:4em;
padding-right:16em;
position:relative;
padding-bottom:3em;
`;
const Img = styled.div`
width: 10px;
padding-left:12em;
padding-top:3em;
position:absolute;
`;
export default Infoplacard2;
