import React  from 'react';
import moment from 'moment';
//img assets
import penguinWarm from "../assets/summer-penguin-swim.png";
import penguinCold from "../assets/winter-penguin-icecream.png";
import sleepySloth from "../assets/sleepy-sloth-coffee.png";
import hamsterReading from "../assets/indoor-hamster-reading.png";
import SunNightAnimation from './SunNightAnimation';

function DisplayPicture ( weatherData ) {
    
    const currentTemp = weatherData.weatherData.current_weather.temperature;
    const weatherCondition = weatherData.weatherData.daily.weathercode[0];
    const nightDay = weatherData.weatherData && moment(weatherData.weatherData.current_weather.time).format("k");


    if (currentTemp >= 20) {
        return (
            <div className="imageContainer">
                <img src={penguinWarm} />
                <p>Put on them shorts!</p>
                <SunNightAnimation nightDay={nightDay}/>
            </div>
        ) 
    } else if (currentTemp >=10 && currentTemp <=20) {
        return (
            <div className="imageContainer">
                <img src={sleepySloth} />
                <p>Not too cold, not too hot. Maybe stay in?</p>
                <SunNightAnimation nightDay={nightDay}/>
            </div>
        ) 
    } 
    else if (currentTemp >=-5 && currentTemp <=10) {
        return (
            <div className="imageContainer">
                <img src={hamsterReading} />
                <p>Kinda chilly.</p>
                <SunNightAnimation nightDay={nightDay}/>
            </div>
        ) 
    } 
    else {
        return (
            <div className="imageContainer">
                <img src={penguinCold} />
                <p>Kinda chilly.</p>
                <SunNightAnimation nightDay={nightDay}/>
            </div>
        )
        }
}

export default DisplayPicture;