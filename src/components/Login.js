import React from 'react';
import styled from 'styled-components';

const Login = (props)=> {
  return(
        <>
      <Img>
        <img src ='/images/netflix.jpg' alt=""/>
        </Img>
        <Container>
        <h1>Unlimited movies,TV</h1>
        <h1>shows, and more.</h1>
        <h5>Watch anywhere.Cancel anytime.</h5>
        <h6>Ready to watch?Enter your email to create or restart your membership.</h6>
        </Container>
        </>
      );
    }
const Img = styled.div`
width: 10px;
margin:8px;
margin-left:1.5em;
`;
const Container = styled.div`
text-align: center;
padding-top:2em;
`;
export default Login;
