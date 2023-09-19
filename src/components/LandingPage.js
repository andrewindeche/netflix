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
        <h1 id="intro-text"><span id="first-line">Unlimited movies,TV</span><span id="second-line"> shows,and more</span></h1>
        <p id="intro-paragraph">Watch anywhere.Cancel anytime.</p>
        <p id="intro-paragraph"><span id="third-line">Ready to watch?Enter your email</span><span id="fourth-line"> to create or restart your</span><span id="fifth-line"> membership.</span></p>
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
padding:8em;
font-size:22px;
line-height: 1em;
z-index:1;

`;
const Introduction = styled.div`
display:flex;
flex-direction: column;
gap: 12px;
margin: 5em 1.5em 0;
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
padding: 10px 30px;
margin:0 7em 2em;
margin-left:0.5em;
height:2.4em;
border-radius:4px;
border:0;
text-align: center !important;
font-size:24px;
position: absolute;
@media only screen and (max-width: 768px){
  display:block;
  font-size:12px;
  margin: 14px 30px;
  width:11em;
  height:3em;
  padding:1em -0.5em -3em;
}
.icon{
  width: 30%;
}

}
button:hover{
  background-color:#DC143C;
}
input{
height:3.8em;
width:25em;
padding:1.2em 0.4em;
color:white !important;
border:1px solid grey;
border-radius:4px;
background-color:hsla(0,0%,0%,0.5);
font-size:15px;
@media only screen and (max-width: 768px){
  width:18em;
  height:2em;
  font-size:12px;
}
}
`;
export default LandingPage;

