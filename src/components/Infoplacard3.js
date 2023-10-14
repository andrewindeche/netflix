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
            Watch a selection of new movies and TV<br/>
            shows without adding any payment details!<br/>
          Get the app<FontAwesomeIcon
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
@media only screen and (max-width: 768px){
  font-size: 18px;
  img[src*="/images/en.png"] {
    position: relative;
    width: 90%;
    padding:1em;
  }
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
