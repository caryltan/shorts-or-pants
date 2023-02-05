import { useState, useEffect } from 'react';
import DropdownCountries from './components/DropdownCountries.js';
import DropdownCities from "./components/DropdownCities.js";
import './App.css';
import DisplayPicture from './components/DisplayPicture.js';

function App() {
  
  const [weatherData, setWeatherData] = useState();
  const [locations, setLocations] = useState([]);
  const [selectCountry, setSelectedCountry] = useState("Canada");
  const [selectCity, setSelectedCity] = useState([]);


  async function getWeatherData(selectCity) {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.search = new URLSearchParams({
      latitude: selectCity.latitude ? selectCity.latitude : 52,
      longitude: selectCity.longitude ? selectCity.longitude : 52,
      current_weather: true,
    })    
    const response = await fetch(url);
    const json = await response.json();
    setWeatherData(json);
  }


  const locationsList = [
      {
          country: "Mexico",
          cities: [
              {cityname: "Cancun", longitude: -86.85, latitude: 21.17},
              {cityname: "Mexico City", longitude: -99.13, latitude: 19.43},
              {cityname: "Guadalajara", longitude: -103.39, latitude: 20.67}
          ]
      },
      {
          country: "Canada",
          cities: [
              {cityname: "Toronto", longitude: -79.42, latitude: 43.70},
              {cityname: "Vancouver", longitude: -123.12, latitude: 49.25},
              {cityname: "Iqaluit", longitude: -68.52, latitude: 63.75}
          ] 
      }
  ]

  const handleChange = (e) => {
      setSelectedCountry(e.target.value);
  }

  const getCityCoordinates = (e) => {
    locationsList.map((country, index) => {
      country.cities.map((city, index) => {
        if (e.target.value === city.cityname) {
          setSelectedCity(city);
        }
      })
    })
  }

  useEffect(() => {
    getWeatherData(selectCity);
    setLocations(locationsList);
  }, [selectCity]);
  
  return (
    <div className="App">
      <h1>Pants or Shorts</h1>
      <h2>What to wear today based on the weather</h2>

      <DropdownCountries locations={locations} selectCountry={selectCountry} handleChange={handleChange}/> 
      <DropdownCities locations={locations} selectCountry={selectCountry} getCityCoordinates={getCityCoordinates}/>

      {weatherData &&  

        <h3>The temperature is {weatherData.current_weather.temperature}</h3>
      }

      {weatherData &&
        <DisplayPicture currentTemp={weatherData.current_weather.temperature}/>
      }
      
    </div>
  );  
}

export default App;
