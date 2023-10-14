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
padding:4em 4em 13em;
position:relative;
border-top:solid hsla(0, 0%, 50%,30%) 8px;
border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
img[src*="/images/en.png"] {
  position: relative;
  flex-direction:column;
}

@media only screen and (max-width: 768px){
  font-size: 18px;
  padding: 2em 4px 12em 2em;
  img[src*="/images/en.png"] {
    position: absolute;
    left:0;
    margin:10em auto;
    width: 72%;
    padding:1em;
  }
  #intro-text{
    position: relative;
    font-size: 30px;
    font-weight: bold;
    margin: 0 1px;
    padding:0em;
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
