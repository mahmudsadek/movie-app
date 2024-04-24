import React from "react";
import './search.css'

const Search = () => {
	return (
		<div className="container">
			<div className="movie-search">
				<h2 className="mt-3">Welocme to our Movie app</h2>
				<p className="mt-4">Million of movies, TV-Shows for you to watch</p>
				<form action="" className="d-flex justify-content-between mt-5">
					<input
						type="text"
						className="search-input"
						placeholder="search and explore"
					/>
					<input
						type="button"
						defaultValue="Search"
						className="search-btn"
					/>
				</form>
			</div>
		</div>
	);
};

export default Search;
