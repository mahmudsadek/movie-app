import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieCard.css";
import React, { useEffect, useState } from "react";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlis } from "../../store/slices/watchlist";

const MovieCard = (props) => {
  const [addedToWatchlist, setAddedToWatchlist] = useState(props.isWatchlist)
  const watchlist = useSelector(state => state.watchlist.state);
  const dispatch = useDispatch()
  const HandelClick = (e) => {
    if(addedToWatchlist) {
      dispatch(removeFromWatchlis(props.movie) );
      setAddedToWatchlist(!addedToWatchlist);
    }
    else {
      dispatch(addToWatchlist( props.movie) );
      setAddedToWatchlist(!addedToWatchlist);
    }
    console.log(watchlist)
  }

	return (
		<>
			<div className="card">
				<Link to={`/details/${props.id}`}>
					<img
						className="card-img"
						src={`https://image.tmdb.org/t/p/w500/${props.img}`}
						alt="Title"
					/>
				</Link>
				<div className="rating">
					<span className="">{props.rate.toFixed(1)*10} <sup>%</sup></span>
          
				</div>
				<div className="card-body text-center w-100">
					<p className="card-title w-100 fw-bold" title={props.title}>{props.title}</p>
					<div className="d-flex justify-content-around">
						<p className="card-text">{props.date}</p>
						<button className="watchlist-btn" onClick={HandelClick}>
              {addedToWatchlist ?
							<FontAwesomeIcon icon={SolidHeart}  style={{color:"rgb(255, 230, 2)"}}/>
              :<FontAwesomeIcon icon={RegularHeart} />
              }
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieCard;
