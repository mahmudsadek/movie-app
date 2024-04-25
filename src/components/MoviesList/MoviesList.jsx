import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

const MoviesList = () => {
  const [movies,setMovies] = useState([]);
  const watchlist = useSelector(state => state.watchlist.state)
  
  useEffect(() =>{
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a58a12ff85a35ffc4c27a80dd763cf01")
    .then((res) => {setMovies(res.data.results) ;console.log(res.data.results)})
    .catch((err) => console.log(err))
    console.log(watchlist)
  },[])

  return (
		<>
			<div className="container mt-3">
				<h2 className="fw-bold fs-3 py-4">POPULER MOVIES</h2>
				<div className="row">
          {movies.map(movie => {
            return (
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2" key={movie.id}>
                <MovieCard
                  movie = {movie}
                  title= {movie.original_title} 
                  rate = {movie.vote_average}
                  date = {movie.release_date}
                  img = {movie.poster_path}
                  id = {movie.id}
                  isWatchlist = {watchlist.find((m) => m.id === movie.id)}
                />
              </div>
            )
          })}
				</div>
			</div>
		</>
	);
};

export default MoviesList;
