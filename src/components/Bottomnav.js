import React from 'react';
import styled from 'styled-components';

const Bottomnav = ()=> {
  return(
        <>
        <Container3>
        <ul style={{paddingLeft:'2.1em'}}>Questions?Contact us.</ul>
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
        </Container3>
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
const Container3 = styled.div`
color:grey;
text-decoration:underline;
font-size:14px;
line-height:1.6em;
padding:6em 8em;
color:#D3D3D3;
p{
padding-left:3em;
font-weight:regular;
}
`;
export default Bottomnav;
