import { useState, useEffect } from 'react';
//components
import SelectLocation from './components/SelectLocation.js'

import './App.css';

function App() {
  
  const [weatherData, setWeatherData] = useState();

  async function getWeatherData() {
        const url = new URL('https://api.open-meteo.com/v1/forecast');
        url.search = new URLSearchParams({
          latitude: 52,
          longitude: 52,
          current_weather: true,
        })    
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setWeatherData(json);
  }

  useEffect(() => {
    getWeatherData();
    console.log(weatherData);
  }, []);
  
  return (
    <div className="App">
      <h1>Pants or Shorts</h1>
      <h2>What to wear today based on the weather</h2>
      <SelectLocation />

      {weatherData &&  
        <h3>The temperature is {weatherData.current_weather.temperature}</h3>
      }

    </div>
  );
}

export default App;
