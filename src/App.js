//modules
import { useState, useEffect } from 'react';
import React  from 'react';
import moment from 'moment';
//components
import DropdownCountries from './components/DropdownCountries.js';
import DropdownCities from "./components/DropdownCities.js";
import DisplayPicture from './components/DisplayPicture.js';
import SunNightAnimation from './components/SunNightAnimation';
import WeatherConditionText from './components/WeatherConditionText';
//styling
import './sass/App.css';


function App() {
  
  const [weatherData, setWeatherData] = useState();
  const [locations, setLocations] = useState([]);
  const [selectCountry, setSelectedCountry] = useState("Canada");
  const [selectCity, setSelectedCity] = useState([]);
  const locationsList = [
    {
      country: "Argentina",
      cities: [
          {cityname: "Buenos Aires", longitude: -58.38, latitude: -34.61},
          {cityname: "Mendoza", longitude: -68.83, latitude: -32.89},
          {cityname: "Rosario", longitude: -60.64, latitude: -32.95}
      ] 
    },
    {
      country: "Australia",
      cities: [
          {cityname: "Sydney", longitude: 151.21, latitude: -33.87},
          {cityname: "Melbourne", longitude: 144.96, latitude: -37.81},
          {cityname: "Brisbane", longitude: 153.03, latitude: -27.47}
      ] 
    },
    {
      country: "Canada",
      cities: [
          {cityname: "Toronto", longitude: -79.42, latitude: 43.70},
          {cityname: "Vancouver", longitude: -123.12, latitude: 49.25},
          {cityname: "Iqaluit", longitude: -68.52, latitude: 63.75}
      ] 
    },
    {
      country: "Colombia",
      cities: [
          {cityname: "Bogotá", longitude: -74.08, latitude: 4.61},
          {cityname: "Cartagena", longitude: -75.51, latitude: 10.40},
          {cityname: "Medellín", longitude: -75.56, latitude: 6.25}
      ] 
    },
    {
      country: "Ethiopia",
      cities: [
          {cityname: "Addis Ababa", longitude: 38.75, latitude: 9.02},
          {cityname: "Bahir Dar", longitude: 37.39, latitude: 11.59},
          {cityname: "Dire Dawa", longitude: 41.87, latitude: 9.59}
      ] 
    },
    {
      country: "Germany",
      cities: [
          {cityname: "Hamburg", longitude: 9.99, latitude: 53.55},
          {cityname: "Düsseldorf", longitude: 6.78, latitude: 51.22},
          {cityname: "Frankfurt", longitude: 10.53, latitude: 49.68}
      ] 
    },
    {
      country: "Iceland",
      cities: [
          {cityname: "Reykjavík", longitude: -21.90, latitude: 64.14},
          {cityname: "Hafnarfjordur", longitude: -21.94, latitude: 64.07},
          {cityname: "Kópavogur", longitude: -21.91, latitude: 64.11}
      ] 
    },
    {
      country: "India",
      cities: [
          {cityname: "Mumbai", longitude: 72.88, latitude: 19.07},
          {cityname: "Kolkata", longitude: 88.36, latitude: 22.56},
          {cityname: "Jaipur", longitude: 75.79, latitude: 26.92}
      ] 
    },
    {
      country: "Indonesia",
      cities: [
          {cityname: "Jakarta", longitude: 106.82, latitude: -6.18},
          {cityname: "Surabaya", longitude: 112.75, latitude: -7.25},
          {cityname: "Makassar", longitude: 119.43, latitude: -5.15}
      ] 
    },
    {
        country: "Mexico",
        cities: [
            {cityname: "Cancun", longitude: -86.85, latitude: 21.17},
            {cityname: "Mexico City", longitude: -99.13, latitude: 19.43},
            {cityname: "Guadalajara", longitude: -103.39, latitude: 20.67}
        ]
    },
    {
      country: "Nigeria",
      cities: [
          {cityname: "Lagos", longitude: 3.39, latitude: 6.45},
          {cityname: "Kano", longitude: 8.52, latitude: 12.00},
          {cityname: "Port Harcourt", longitude: 7.01, latitude: 4.78}
      ] 
    },
    {
      country: "Spain",
      cities: [
          {cityname: "Barcelona", longitude: 2.16, latitude: 41.39},
          {cityname: "Madrid", longitude: -3.70, latitude: 40.42},
          {cityname: "Seville", longitude: -5.97, latitude: 37.38}
      ] 
    },
    {
      country: "Turkey",
      cities: [
          {cityname: "Istanbul", longitude: 28.95, latitude: 41.01},
          {cityname: "Bursa", longitude: 29.06, latitude: 40.20},
          {cityname: "Konya", longitude: 32.48, latitude: 37.87}
      ] 
    },
    {
      country: "Vietnam",
      cities: [
          {cityname: "Ho Chi Minh City", longitude: 106.63, latitude: 10.82},
          {cityname: "Hanoi", longitude: 105.84, latitude: 21.02},
          {cityname: "Da Nang", longitude: 108.22, latitude: 16.07}
      ] 
    }
    ]
  //getting hour of the day for night/day 
  const numericalHour = weatherData && moment(weatherData.current_weather.time).format("k");
  const nightDay = weatherData && weatherData && moment(weatherData.current_weather.time).format("k");
  const weatherCondition = weatherData && weatherData.daily.weathercode[0];


  async function getWeatherData(selectCity) {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.search = new URLSearchParams({
      latitude: selectCity.latitude ? selectCity.latitude : 52,
      longitude: selectCity.longitude ? selectCity.longitude : 52,
      current_weather: true,
      timezone: "auto",
      daily: "weathercode",
    })    
    const response = await fetch(url);
    const json = await response.json();
    setWeatherData(json);
  }

  useEffect(() => {
    getWeatherData(selectCity);
    setLocations(locationsList);
  }, [selectCity]);

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

  return (
    <div className={"App " + (numericalHour >= 8 && numericalHour <=17 ? 'dayTime' : 'nightTime')}>

      <div className="wrapper">
        <h1>Pants or Shorts</h1>
        <h2>What to wear today based on the weather</h2>

        <h3>Choose a location:</h3>
        <main className="dropdownContainer">
          <DropdownCountries locations={locations} selectCountry={selectCountry} handleChange={handleChange}/> 
          <DropdownCities locations={locations} selectCountry={selectCountry} getCityCoordinates={getCityCoordinates}/>
        </main>
      
        <section className="displayImageContainer">
          <div className="imageContainer">
          {weatherData && 
          <>
            <DisplayPicture weatherData={weatherData} />
            <WeatherConditionText condition={weatherCondition} />
            <SunNightAnimation nightDay={nightDay}/>
          </>
          }             
          </div>
        </section>

        <footer>Made by Caryl Tan. Created at <a href="https://junocollege.com/">Juno College</a></footer>
      </div>
    </div>
  );  
}

export default App;
