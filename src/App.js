import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
	return (
		<BrowserRouter>
      <NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" case element={<ContactUs />} />
        <Route path="/details/:id" element={<MovieDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
