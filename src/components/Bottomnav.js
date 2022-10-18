import React from 'react';
import styled from 'styled-components';

const Bottomnav = (props)=> {
  return(
        <>
        <Allists>
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
        </Allists>
        </>
      );
    }

const Firstlist = styled.div`
display: inline-block;
padding-right:6em;
`;
const Secondlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
`;
const Thirdlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
`;
const Forthlist = styled.div`
position: relative;
display: inline-block;
`;
const Allists = styled.div`
padding-top:2em;
padding-left:34em;
padding-bottom:4em;
color:grey;
font-size:14px;
line-height:1.6em;
h4{
padding-left:3em;
font-weight:regular;
}
`;
export default Bottomnav;
