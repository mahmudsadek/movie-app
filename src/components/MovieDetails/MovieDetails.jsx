import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart} from '@fortawesome/free-solid-svg-icons';
import "./MovieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlis } from "../../store/slices/watchlist";

const MovieDetails = () => {
	const {id} = useParams();
  const watchlist = useSelector(state => state.watchlist.state);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false)
  const dispatch = useDispatch()
  const HandelClick = (e) => {
    if (addedToWatchlist) {
      dispatch(removeFromWatchlis(movie)); // Assuming removeFromWatchlist action accepts movie id
    } else {
      dispatch(addToWatchlist(movie)); // Assuming addToWatchlist action accepts movie
    }
    setAddedToWatchlist(!addedToWatchlist);
  }
  
  useEffect(() => {
    if (watchlist) {
      setAddedToWatchlist(watchlist.find(movie => movie.id === id));
    }
  }, [watchlist]);

	const [movie, setMovie] = useState({});

	const renderStars = () => {
		const rating = movie.vote_average; // Assuming vote_average is the rating property
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating / 2) {
				stars.push(
					<FontAwesomeIcon
						key={i}
						icon={solidStar}
						className="mx-1"
						style={{ color: "black", fontSize: 20 }}
					/>
				);
			} else {
				stars.push(
					<FontAwesomeIcon
						key={i}
						icon={regularStar}
						className="mx-1"
						style={{ color: "black", fontSize: 20 }}
					/>
				);
			}
		}
		return stars;
	};

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=a58a12ff85a35ffc4c27a80dd763cf01`
			)
			.then((res) => {
				setMovie(res.data);
				console.log(movie.genres);
			})
			.catch((err) => console.log(err));
    //setAddedToWatchlist( watchlist.find(m => m.id === movieId) )
	}, [movie, id]);
	return (
		<>
			<div className="container">
				<div className="row my-5">
					<div className="col-sm-12 col-md-4">
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt=""
							className="movie-img"
						/>
					</div>
					<div className="col-sm-12 col-md-8 ">
            <div className="d-flex justify-content-between   align-items-baseline;">
						  <h2 className="fs-2 fw-bold">{movie.original_title}</h2>
              <button onClick={HandelClick} style={{border:"none",backgroundColor:"#ffffff00"}}>
                {addedToWatchlist ?
                  <FontAwesomeIcon icon={SolidHeart}  style={{color:"rgb(255, 230, 2)",fontSize:"30px"}}/>
                  :<FontAwesomeIcon icon={RegularHeart} style={{fontSize:"30px"}}/>
                }
              </button>
            </div>
						<p className="text-secondary">{movie.release_date}</p>
						<div className="rate-sec">
							{renderStars()}
							<span className="mx-4">{movie.vote_count}</span>
						</div>
						<p className="my-3 fs-5">{movie.overview}</p>
						<div className="category-sec my-4">
							
								{movie.genres?.map((genre) => (
									<span key={genre.id} className="category mx-1">
										{genre.name}
									</span>
								))}
								</div>
						<div className="info-sec row mt-5">
							<div className="col">
								<b>Deuration:</b>
								<span className="mx-3">132 min</span>
							</div>
							<div className="col">
								<b>Language:</b>
								{movie.spoken_languages ? (
									movie.spoken_languages.map((l, index) => (
										<span className="mx-3" key={index}>
											{l.english_name}
										</span>
									))
								) : (
									<span>Loading genres...</span>
								)}
							</div>
						</div>
						<div className="row mt-4">
							{movie.production_companies ? (
								movie.production_companies.map((m) => (
									<div className={movie.production_companies.length > 4 ? "col-2 px-1" : 'col-3 px-1'}>
										<img
											src={`https://image.tmdb.org/t/p/w500//${m.logo_path}`}
											alt={`${m.name}`}
											className="w-100"
                      
										/>
									</div>
								))
							) : (
								<span></span>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
