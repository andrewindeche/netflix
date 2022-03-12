import React from 'react';
import styled from 'styled-components';

const Login = (props)=> {
  return(
        <>
      <Img>
        <img src ='/images/netflixxx.jpeg' alt=""/>
        </Img>
        <Container>
        <h1>Unlimited movies,TV</h1>
        <h1>shows, and more.</h1>
        <h5>Watch anywhere.Cancel anytime.</h5>
        <h5>Ready to watch?Enter your email to create or restart your membership.</h5>
        </Container>
        <BgImage/>
        </>
      );
    }
const Img = styled.div`
width: 10px;
height: auto;
`;
const Container = styled.div`
text-align: center;
padding-top:5em;
`;
const BgImage  = styled.div`
background-image:url("/images/bg.jpg");
position: absolute;
`;

export default Login;
