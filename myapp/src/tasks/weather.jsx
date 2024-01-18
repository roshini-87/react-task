import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';
function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleButtonClick = async () => {
    try {
      const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

      const response = await axios.get(apiUrl, {
        headers: {
          'X-RapidAPI-Key': 'ea1736c136msh0f5c187e704eedbp15d852jsn9c8eb45d2ffd',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      });

      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching data. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather">

      <label for="city">Enter City:
       <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button onClick={handleButtonClick}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>Weather Information for {city}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
