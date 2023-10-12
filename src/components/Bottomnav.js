import React from 'react';
import styled from 'styled-components';

const Bottomnav = ()=> {
  return(
        <>
        <Container3>
        <ul class = "Questions" style={{paddingLeft:'2.1em'}}>Questions?Contact us.</ul>
        <Firstlist>
        <ul class="FAQ">FAQ
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Netflix Kenya</li>
        </ul>
        </Firstlist>
        <Secondlist>
        <ul class ="Help-Center">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="Hidden">Blank</ul>
        </Secondlist>
        <Thirdlist>
        <ul class = "Account">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Speed Test</li>
          <li>Only on Netflix</li>
        </ul>
        </Thirdlist>
        <Forthlist>
        <ul class ="Media-Center">
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
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
}
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
display: flex;
flex-flow: row no-wrap;
padding:2em 4em;
color:#D3D3D3;
.Questions{
  position: absolute;
  margin: 6px 2em;
}
.FAQ ,.Help-Center,.Account,.Media-Center,.contacts{
  padding: 4em;
  list-style: none; 
  display: flex;
  flex-direction: column;
  gap: 8px 0px;
}
@media only screen and (max-width: 768px){
  font-size: 16px;
}
p{
padding-left:3em;
font-weight:regular;
}
`;
export default Bottomnav;
