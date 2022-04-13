import Movies from '../components/categories/Movies';
import requests from "./requests";

function MovieRows(){
  return(
    <>
    <Movies/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} isLargeRow />
      
    </>
  );
}
export default MovieRows;
