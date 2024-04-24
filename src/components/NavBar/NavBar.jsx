import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="container mt-2">
			<nav
				className="navbar navbar-expand-lg rounded px-2"
				style={{ backgroundColor: "rgb(255, 230, 2)" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand fw-bold fs-4" href="#">
						MOVIES'LAND
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active fw-bold"
									aria-current="page"
									to="/"
								>
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link 
                  className="nav-link fw-bold"
                  to="/about-us">
									ABOUT US
								</Link>
							</li>
							<li className="nav-item">
								<Link 
                  className="nav-link fw-bold"
                  to={"/contact-us"}
                  >
                  CONTACT US
                  </Link>
							</li>
						</ul>
						<div className="d-flex" role="search">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link 
                    className="nav-link fw-bold"
                    to={"/"}>
                      WATCHLIST
                    </Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
