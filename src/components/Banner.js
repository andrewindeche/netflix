import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";
import "./Banner.css";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  const [movie, setMovies] = useState([]);

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
     <span><button className="button_play"><FontAwesomeIcon
      className = "icon" icon= {faPlay}/>Play</button></span>
      </div>
    </div>
    <div className="fade"/>
  </header>

  );
}
export default Banner;
