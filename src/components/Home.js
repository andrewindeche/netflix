import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from "./requests";

function Home(){
  return(
    <>
    <Banner/>
    <Row
        title="Netflix Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow 
      />
      <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow  />
    </>
  );
}
export default Home;
