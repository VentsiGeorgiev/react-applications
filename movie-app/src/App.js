import { useEffect } from 'react';

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=45057cc6';

function App() {

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);


  return (
    <header className='header'>
      <div className='container center'>
        <h1 className='logo'>MovieBox7</h1>
      </div>
    </header>

  );
}

export default App;
