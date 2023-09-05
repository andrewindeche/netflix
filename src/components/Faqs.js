import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';

const Faqs = ()=> {
  return(
        <>
        <Container>
        <h1>Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Netflix?</Accordion.Header>
        <Accordion.Body>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows,
          movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br/>
          You can watch as much as you want, whenever you want without a single commercial
          – all for one low monthly price. There's always something new to discover and new TV 
          shows and movies are added every week!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much does Netflix cost?</Accordion.Header>
        <Accordion.Body>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one 
        fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Where can I watch?</Accordion.Header>
        <Accordion.Body>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com 
        from your personal computer or on any internet-connected device that offers the Netflix app, including 
        smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your 
        favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go 
        and without an internet connection. Take Netflix with you anywhere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do i cancel?</Accordion.Header>
        <Accordion.Body>
        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account 
        online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What can I cancel on Netflix?</Accordion.Header>
        <Accordion.Body>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, 
        and more. Watch as much as you want, anytime you want.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
        <Accordion.Body>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly 
        TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict 
        the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: center;
padding:4em;
border-bottom:solid #3A3B3C 6px;
`;
export default Faqs;
