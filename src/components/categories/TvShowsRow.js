import TvShows from '../components/categories/TvShows';
import Row from './components/Row';
import requests from "./requests";

function TvShows(){
  return(
    <>
    <TvShows/>
    <Row title="Popular" fetchUrl={requests.fetchPopularTvShows} isLargeRow /> 
    <Row title="Airing Today" fetchUrl={requests.fetchAiringTodayTvShows} isLargeRow /> 
    <Row title="On TV" fetchUrl={requests.fetchOnTvTvShows} isLargeRow /> 
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedTvShows} isLargeRow /> 
    </>
  );
}
export default TvShows;
