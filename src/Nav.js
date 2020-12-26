import React from "react";
import "./Nav.css";
import requests from "./requests";

/* 
    ========================
    <div className="header_" ></div>
    className="header_"
    <img src="" alt="image" /> 
    ========================

*/
function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHerrorMovies)}>
        Herror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romace
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci=fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>Movie</h2>
    </div>
  );
}

export default Nav;
