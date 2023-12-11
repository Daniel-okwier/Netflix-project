import React, { useState, useEffect } from 'react';
import './css/Row.css';
import axios from '../Components/axios'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name|| movie?.title|| movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: '350',
    width: '1000',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      <div style ={{padding:"40px"}}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;