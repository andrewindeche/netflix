import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Faqs = ()=> {
  return(
        <>
        <Container>
        <h1 id="intro-text">Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className='header'>What is Netflix?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows,
          movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br/>
          You can watch as much as you want, whenever you want without a single commercial
          – all for one low monthly price. There's always something new to discover and new TV 
          shows and movies are added every week!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><p className='header'>How much does Netflix cost?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one 
        fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><p className='header'>Where can I watch?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com 
        from your personal computer or on any internet-connected device that offers the Netflix app, including 
        smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your 
        favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go 
        and without an internet connection. Take Netflix with you anywhere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><p className='header'>How do i cancel?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account 
        online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><p className='header'>What can I cancel on Netflix?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, 
        and more. Watch as much as you want, anytime you want.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><p className='header'>Is Netflix good for kids?</p></Accordion.Header>
        <Accordion.Body style={{color:"white"}}>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly 
        TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict 
        the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p id="intro-paragraph" style={{margin:"2em 1em"}}>Ready to watch?Enter your email to create or restart your membership.</p>
    <Search>
        <form action="/action_page.php">
          <input type="text" placeholder="Email address" name="search"></input>
          <button type="submit">Get Started<FontAwesomeIcon 
          className = "icon" icon= {faChevronRight}/>  </button>
        </form>
      </Search>
        </Container>
        </>
      );
    }

const Container = styled.div`
text-align: center;
padding:4em;
border-bottom:solid #3A3B3C 6px;
.accordion{
  --bs-accordion-bg: rgb(45,45,45);
  width: 90%;
  margin:1.3em;
}
.accordion-button {
  color: white; 
  margin: 10px auto;
  height: 5.5em;
  border-radius: 0 !important;
}
.accordion-item {
  border: none;
}

#intro-text{
  font-weight: bolder;
  letter-spacing: 0.4px;
}
#intro-paragraph{
  font-weight:50;
  font-size:21px;
}
`;
const Search = styled.div`
display:flex;
align-items:center;
margin:1em 10em;
button {
background-color:#FF0000;
color:white;
font-weight:bold;
padding: 6px 14px;
margin:0 7em 2em;
margin-left:0.5em;
height:2.4em;
border-radius:4px;
border:0;
text-align: center !important;
font-size:24px;
position: absolute;
  }
button:hover{
  background-color:#DC143C;
}
input{
height:3.8em;
width:25em;
padding:1.2em;
color:white !important;
border:1px solid grey;
border-radius:4px;
background-color:hsla(0,0%,0%,0.5);
font-size:15px;
}`;
export default Faqs;
