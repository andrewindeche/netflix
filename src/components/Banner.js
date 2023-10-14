import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";
import "./Banner.css";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movieTrailer from "movie-trailer"; // import the movie-trailer package
import ReactPlayer from "react-player"; // import the ReactPlayer component

function Banner() {
  const [movie, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState(""); // state variable for trailer URL
  const [playing, setPlaying] = useState(false); // state variable for autoplay feature
  const [visible, setVisible] = useState(false); // state variable for visibility feature

  useEffect(() => {
    async function fetchBanner() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchBanner();
  }, []);
  console.log(movie);

  function truncate(str, n){
  return str?.length > n ? str.substr(0, n-1) + "...": str;
  }

  // function to handle play button click
  function handlePlay() {
    // if there is no trailer URL, find it using movie-trailer package
    if (!trailerURL) {
      movieTrailer(movie?.title || movie?.original_name || movie?.name)
        .then((url) => {
          // get the video id from the url
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v")); // set the trailer URL state
        })
        .catch((error) => console.log(error));
    }
    // toggle the playing and visibility state
    setPlaying(true);
    setVisible(true);
  }

  // function to handle trailer click
  function handleTrailer() {
    // toggle the playing and visibility state
    setPlaying(false);
    setVisible(false);
  }

  return (
    <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
      marginTop:"3em",
    }}
  >
    <div className="content">
      <h1 className="title">
        {" "}
        {movie?.title || movie?.original_name || movie?.name}
      </h1>

      <h2 className="description">{truncate(movie?.overview, 200)}</h2>

      <div className="buttons">
     <span><button className="button_play" onClick={handlePlay}><FontAwesomeIcon
      className = "icon" icon= {faPlay}/>Play</button></span>
      </div>
    </div>
    <div className="fade"/>
    {/* render the ReactPlayer component with trailer URL and playing props */}
    {/* use conditional rendering to show or hide the component based on visibility state */}
    {visible && (
      <ReactPlayer url={`https://www.youtube.com/watch?v=${trailerURL}`} playing={playing} controls={true} onClick={handleTrailer} />
    )}
    
  </header>

  );
}
export default Banner;
