import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

const WatchList = () => {
	const watchlist = useSelector((state) => state.watchlist.state);
	return (
		<div className="container">
			<h2 className="fw-bold text-center my-5">WATCHLIST</h2>
			<div className="row">
				{watchlist.map((movie) => {
					return (
						<div
							className="col-xs-12 col-sm-4 col-md-3 col-lg-2"
							key={movie.id}
						>
							<MovieCard
								movie={movie}
								title={movie.original_title}
								rate={movie.vote_average}
								date={movie.release_date}
								img={movie.poster_path}
								id={movie.id}
                isWatchlist = {watchlist.find((m) => m.id === movie.id)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WatchList;
