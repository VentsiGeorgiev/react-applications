import './App.css';
import { useEffect, useState } from 'react';

const API_URL = 'http://api.weatherapi.com/v1/current.json?key=cb4e6bb47f94480083b83356220805&q=';

function App() {
  const [place, setPlace] = useState('Barcelona');
  const [locationInfo, setLocationInfo] = useState({});

  useEffect(() => {
    handleFetch();
  });

  const handleFetch = () => {
    fetch(`${API_URL}${place}&days=1&aqi=no&alerts=no`)
      .then(response => response.json())
      .then(data => setLocationInfo({
        name: data.location.name,
        country: data.location.country,
        tempCelsius: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon
      }))
  };


  return (

    <section className="container">
      <div className="weather-info">
        <div className="search-box">
          <input className="search-input" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
          <button className="btn" onClick={handleFetch}>Search</button>
        </div>
        <div className="content-box">
          <div className='temp'>
            <div className="image">
              <img src={locationInfo.icon} alt="icon" />
            </div>
            <h2>{locationInfo.tempCelsius}° C</h2>
          </div>
          <h2 className='condition'>{locationInfo.condition}</h2>
          <h2>{locationInfo.name}</h2>
          <h2>{locationInfo.country}</h2>
        </div>


      </div>

    </section>

  );
}

export default App;
