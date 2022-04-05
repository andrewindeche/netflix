import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from "./requests";

function Home(){
  return(
    <>
    <Banner/>
    <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} isLargeRow />
    </>
  );
}
export default Home;
