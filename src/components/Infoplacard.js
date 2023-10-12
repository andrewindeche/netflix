import React from 'react';
import styled from 'styled-components';

const Infoplacard = ()=> {
  return(
        <>
        <Container>
        <h1 id="intro-text">Watch everywhere.</h1>
        <span id="first-line">Stream unlimited movies and TV shows</span>
        <span id="second-line">on your phone, tablet, laptop,and TV.</span>
        </Container>
        </>
      );
    }

const Container = styled.div`
  text-align: left;
  display: grid;
  padding-top:1em;
  padding-left:14em;
  padding-bottom: 4em;
  border-top:solid hsla(0, 0%, 50%,30%) 8px;
  border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
@media only screen and (max-width: 768px){
  margin: 1rem -11rem;
  line-height: 2;
  width:fit-content;
  gap:10px;
  #first-line,#second-line{
    font-size: 13px;
    line-height: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: start;
  }
  
}
`;
export default Infoplacard;
