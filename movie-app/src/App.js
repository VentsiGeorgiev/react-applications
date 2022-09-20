import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';

import './App.css';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;


function App() {

  let envg = process.env.REACT_APP_NOT_SECRET_CODE;
  console.log('envg');
  console.log(envg);
  console.log('envg');



  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);


  return (
    <>
      <header className="header">
        <div className="container center">
          <h1 className="logo">MovieBox7</h1>
        </div>
      </header>

      <main className="main">
        <div className="container center">
          <div className="search flex">
            <input
              className="search-input"
              type="text"
              placeholder="Search for movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='search-btn' onClick={() => searchMovies(searchTerm)}>Search</button>
          </div>

          {
            movies?.length > 0
              ? (
                <div className="all-movies">
                  {movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} />
                  )}
                </div>
              ) : (
                <div className='empty'>
                  <h2>No Movies Found</h2>
                </div>
              )
          }
        </div>
      </main>
    </>

  );
}

export default App;
