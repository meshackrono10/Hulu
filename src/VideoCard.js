import React, { forwardRef, useState } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_Url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  const [trailerUrl, setTrailerUrl] = useState([]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div ref={ref} className="videoCard">
      <img
        onClick={() => handleClick(movie)}
        src={`${base_Url}${movie.backdrop_path || movie.poster_path}`}
        alt="background"
      />
      {/* <p>{movie.release_date || movie.first_air_date}</p> */}
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <div className="videoCard_text">
        <p className="videoCard_stats">
          {movie.madia_type && `${movie.media_type}`}
          {movie.release_date || movie.first_air_date}
          <ThumbUpIcon />
          <ThumbUpIcon />
          <ThumbUpIcon />
          {movie.vote_count}
        </p>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
});

export default VideoCard;
