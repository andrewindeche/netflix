import React from 'react';
import "./LandingPage.css";
import styled from 'styled-components';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = ()=> {
  return(
        <>
        <div className="LandingPage"> 
        <Container>
        <Introduction>
        <h1 id="intro-text">Unlimited movies,TV shows, and more</h1>
        <p id="intro-paragraph">Watch anywhere.Cancel anytime.</p>
        <p id="intro-paragraph">Ready to watch?Enter your email to create or restart your membership.</p>
        </Introduction>
        <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started<FontAwesomeIcon 
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
padding:5em;
font-size:22px;
line-height: 1.4em;
`;
const Introduction = styled.div`
margin: 9em 1.5em 0;
font-weight: bolder;
`;

const Search = styled.div`
display:flex;
align-items:center;
margin:1em 10em;
button {
background-color:#FF0000;
color:white;
font-weight:bold;
padding: 6px 14px;
margin:0 7em 2em;
margin-left:0.5em;
height:2.4em;
border-radius:4px;
border:0;
text-align: center !important;
font-size:24px;
position: absolute;
  }
button:hover{
  background-color:#DC143C;
}
input{
height:3.8em;
width:25em;
color:white !important;
border:1px solid grey;
border-radius:4px;
background-color:hsl(0,0%,0%,0.5);
font-size:15px;
}
`;
export default LandingPage;
