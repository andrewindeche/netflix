import React from 'react';
import styled from 'styled-components';

const Faqs = (props)=> {
  return(
        <>
        <Container>
        <h2>Frequently Asked Questions</h2>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: left;
padding-top:1em;
padding-left:18em;
padding-bottom: 2em;
border-bottom:solid gray 6px;
`;
export default Faqs;
