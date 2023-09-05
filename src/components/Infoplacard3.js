import React from 'react';
import styled from 'styled-components';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Infoplacard3 = ()=> {
  return(
        <>
          <Container2>
          <H2>
          <h2>Have an Android</h2>
          <h2>Phone?Get our new</h2>
          <h2>free plan!</h2>
          </H2>
          <br/>
          <p1>Watch a selection of new movies and TV</p1><br/>
          <p1>shows without adding any payment details!</p1><br/>
          <p1>Get the app</p1><FontAwesomeIcon
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
