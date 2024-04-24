import React from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

const Home = () => {
  return (
    <div className='container-fluid'>
      <Search />
      <MoviesList />
    </div>
  );
}

export default Home;
