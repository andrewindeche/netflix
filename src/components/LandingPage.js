import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = (props)=> {
  return(
        <>
      <Img>
        <img src ='/images/netflix.jpg' alt=""/>
        </Img>
        <Button className = "btn-lg" variant="success" type="submit">Sign In</Button>
        <Container>
        <h1>Unlimited movies,TV</h1>
        <h1>shows, and more.</h1>
        <h5>Watch anywhere.Cancel anytime.</h5>
        <h6>Ready to watch?Enter your email to create or restart your membership.</h6>
        <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started <FontAwesomeIcon 
       className = "icon" icon= {faChevronRight}/>  </button>
        </form>
      </Search>
        </Container>
        </>
      );
    }
const Img = styled.div`
width: 10px;
margin-left:1.5em;
padding-top:14px;
`;
const Container = styled.div`
text-align: center;
padding-top:2em;
padding-bottom: 4.5em;
border-bottom:solid #3A3B3C 6px;
line-height: 1.4em;
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
