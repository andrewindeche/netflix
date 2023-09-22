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
        <p><span id="third-line">Ready to watch?Enter your email</span><span id="fourth-line"> to create or restart your</span><span id="fifth-line"> membership.</span></p>
        </Introduction>
        <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started<FontAwesomeIcon 
          className = "icon" icon= {faChevronRight}/></button>
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
@media only screen and (max-width: 768px){
border-top:solid hsla(0, 0%, 0%,30%) 50px;
width:100%;

}
`;
const Introduction = styled.div`
display:flex;
flex-direction: column;
gap: 8px;
margin: 6em 1.5em 0;
font-weight: bolder;
@media only screen and (max-width: 768px){
  margin:11px
}
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
  font-size:12px;
  font-weight: bold;
  margin: 14px 40px;
  width:10em;
  height:3em;
  border-radius: 2px;
  padding: 8px 13px;
  display:flex;
  .icon{
    width: 10%;
    padding-left: 7px;
    padding-top: 1.3px;
      }
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
  width:16em;
  height:2em;
  font-size:12px;
}
}
`;
export default LandingPage;

