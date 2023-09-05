import React from 'react';
import styled from 'styled-components';

const Bottomnav = ()=> {
  return(
        <>
        <Container>
        <p style={{paddingLeft:'1.5em'}}>Questions?Contact us.</p>
        <Firstlist>
        <ul>FAQ</ul>
        <ul>Investor Relations</ul>
        <ul>Privacy</ul>
        <ul>Speed Test</ul>
        <ul>Netflix Kenya</ul>
        </Firstlist>
        <Secondlist>
        <ul>Help Center</ul>
        <ul>Jobs</ul>
        <ul>Cookie Preferences</ul>
        <ul>Legal Notices</ul>
        <ul className="Hidden">Blank</ul>
        </Secondlist>
        <Thirdlist>
        <ul>Account</ul>
        <ul>Ways to Watch</ul>
        <ul>Corporate Information</ul>
        <ul>Speed Test</ul>
        <ul>Only on Netflix</ul>
        </Thirdlist>
        <Forthlist>
        <ul>Media Center</ul>
        <ul>Terms of Use</ul>
        <ul>Contact Us</ul>
        <ul className="Hidden">Blank</ul>
        <ul className="Hidden">Blank</ul>
        </Forthlist>
        </Container>
        </>
      );
    }

const Firstlist = styled.div`
display: inline-block;
padding-right:6em;
text-decoration:underline;
`;
const Secondlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
text-decoration:underline;
`;
const Thirdlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
text-decoration:underline;
`;
const Forthlist = styled.div`
position: relative;
display: inline-block;
text-decoration:underline;
`;
const Container = styled.div`
color:grey;
text-decoration:underline;
font-size:14px;
padding:6em;
line-height:1.6em;
h4{
padding-left:3em;
font-weight:regular;
}
`;
export default Bottomnav;
