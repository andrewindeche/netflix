import React from 'react';
import styled from 'styled-components';

const Faqs = (props)=> {
  return(
        <>
        <Container>
        <h2>Frequently Asked Questions</h2>
        <Button>
        <Card>
        <span>What is Netflix?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <Button>
        <Card>
        <span>How much does Netflix cost?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <Button>
        <Card>
        <span>Where can i watch?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <Button>
        <Card>
        <span>How do i cancel?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <Button>
        <Card>
        <span>What can i watch on Netflix?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <Button>
        <Card>
        <span>is Netflix good for kids?
         <button type="button" class="button">
           +
         </button></span>
         </Card>
        </Button>
        <br></br>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started > </button>
        </form>
      </Search>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
padding-top:1em;
padding-left:18em;
padding-bottom: 2em;
border-bottom:solid #3A3B3C 6px;
final{
  line-height: 5em;
}
`;
const Button = styled.div`
text-align: left;
button{
  margin-left:10em;
}
`;
const Card = styled.div`
background-color:#3A3B3C;
height:2.5em;
margin-right:19em;
padding-left:1em;
margin-bottom: 10px;
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
export default Faqs;
