import React from 'react';
import "./LandingPage.css";
import styled from 'styled-components';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = (props)=> {
  return(
        <>
        <div className="LandingPage"> 
        <Container>
        <Introduction>
        <h1 id="intro-text">Unlimited movies,TV shows, and more.</h1>
        <p id="intro-paragraph">Watch anywhere.Cancel anytime.</p>
        <p id="intro-paragraph">Ready to watch?Enter your email to create or restart your membership.</p>
        </Introduction>
        <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started <FontAwesomeIcon 
       className = "icon" icon= {faChevronRight}/>  </button>
        </form>
      </Search>
        </Container>
        </div>
        </>
      );
    }
const Container = styled.div`
text-align: center;
padding:4em;
font-size:23px;
border-bottom:solid #3A3B3C 6px;
line-height: 1.4em;
`;
const Introduction = styled.div`
margin: 9em 2em 0;
font-weight: bolder;
`;

const Search = styled.div`
padding-right:7em;
button {
background-color:#DC143C;
color:white;
height:3em;
width:9em;
font-size:26px;
position: absolute;
  }
input{
height:4.8em;
width:35em;
font-size:15px;
}
`;
export default LandingPage;
