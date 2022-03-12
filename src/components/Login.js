import React from 'react';
import styled from 'styled-components';

const Login = (props)=> {
    return(
        <>
      <Img>
        <img src ='/images/netflix.png' alt=""/>
        </Img>
        <Container>
        <h1>Unlimited movies,TV shows, and more.</h1>
        <h3>Watch anywhere.Cancel anytime.</h3>
        <h4>Ready to watch?Enter your email to create or restart your membership.</h4>
        </Container>
        </>
      );
    }
const Img = styled.div`
width:10%;
`;
const Container = styled.div`
margin:14em;
`;
export default Login;
