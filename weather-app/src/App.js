import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const API_URL = `https://api.weatherapi.com/v1/current.json?key=cb4e6bb47f94480083b83356220805&q=${location}`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(API_URL).then((res) => {
        setData(res.data)
      })
    }
  }

  return (

    <main className="app">

      <section className="search">
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
        />
      </section>

      <section className="container">

        <div className="top">
          <div className="location">
            {data.location ? <p>{data.location.name}</p> : null}
          </div>
          <div className="temp">
            {data.current
              ? <h1>{data.current.feelslike_c} °C</h1>
              : null}
          </div>
          <div className="description">
            {data.current ? <p>{data.current.condition.text}</p> : null}
          </div>
        </div>

        {data.current
          ? <div className="bottom">
            <div className="feels">
              <p className="bold">{data.current.feelslike_c} °C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p className="bold">{data.current.humidity} %</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{data.current.wind_mph} MPH</p>
              <p>Wind</p>
            </div>
          </div>
          : null}



      </section>

    </main>

  );
}

export default App;
