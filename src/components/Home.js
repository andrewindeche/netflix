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
        isLargeRow // prop for styling individual row
      />
      <Row title="Top Rated " fetchUrl={requests.fetchNetflixOriginals} />
    </>
  );
}
export default Home;
