import React from 'react';
import styled from 'styled-components';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Infoplacard3 = ()=> {
  return(
        <>
          <Container2>
          <H2>
          <h1 id="intro-text">Have an Android</h1>
          <h1 id="intro-text">Phone?Get our new</h1>
          <h1 id="intro-text">free plan!</h1>
          </H2>
          <br/>
          <p>Watch a selection of new movies and TV</p><br/>
          <p>shows without adding any payment details!</p><br/>
          <p>Get the app</p><FontAwesomeIcon
           className = "icon" icon= {faChevronRight}/>
           <Img>
          <img src ='/images/en.png' alt="android"/>
          </Img>
        </Container2>
        </>
      );
    }
const Container2 = styled.div`
padding:4em 4em 6em;
position:relative;
border-top:solid hsla(0, 0%, 50%,30%) 8px;
border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
img[src*="/images/en.png"] {
  position: relative;
  flex-direction:column;
}
`;
const H2 = styled.div`
line-height: 0.2em;
`;
const Img = styled.div`
display:inline-flex;
float:right;
margin: -8em 3em;
`;
export default Infoplacard3;
