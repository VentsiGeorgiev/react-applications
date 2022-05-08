import './App.css';
import { useEffect, useState } from 'react';

const API_URL = 'http://api.weatherapi.com/v1/current.json?key=cb4e6bb47f94480083b83356220805&q=';

function App() {
  const [place, setPlace] = useState('');
  const [locationInfo, setLocationInfo] = useState({});

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`${API_URL}${place}&aqi=no`)
      .then(response => response.json())
      .then(data => setLocationInfo({
        name: data.location.name,
        country: data.location.country,
        tempCelsius: data.current.temp_c,
        condition: data.current.condition.text,
      }))
  };


  return (
    <div className="App">


      <section >
        <div >
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
          <button className='btn' onClick={handleFetch}>Search</button>
        </div>

        <div className="weather-info">
          <h2>{locationInfo.name} {locationInfo.country}</h2>
          <p>{locationInfo.tempCelsius}</p>
          <p>{locationInfo.condition}</p>
        </div>

      </section>
    </div>
  );
}

export default App;
