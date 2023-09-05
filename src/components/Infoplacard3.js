import React from 'react';
import styled from 'styled-components';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Infoplacard2 = (props)=> {
  return(
        <>
          <Container2>
          <H2>
          <h2>Have an Android</h2>
          <h2>Phone?Get our new</h2>
          <h2>free plan!</h2>
          </H2>
          <br/>
          <p>Watch a selection of new movies and TV</p>
          <p>shows without adding any payment details!</p>
          <p1>Get the app</p1><FontAwesomeIcon
           className = "icon" icon= {faChevronRight}/>
        </Container2>
        <Img>
          <img src ='/images/en.png' alt=""/>
          </Img>
        </>
      );
    }
const Container2 = styled.div`
padding-left:12em;
position:absolute;
padding-bottom: 2em;
`;
const H2 = styled.div`
line-height: 0.2em;
`;
const Img = styled.div`
text-align: left;
float:right;
position: relative;
display:inline-block;
padding-right:16em;
position:relative;
padding-bottom:3em;
`;
export default Infoplacard2;
