import React  from 'react';
import moment from 'moment';
//img assets
import penguinWarm from "../assets/summer-penguin-swim.png";
import penguinCold from "../assets/winter-penguin-icecream.png";
import sleepySloth from "../assets/sleepy-sloth-coffee.png";
import hamsterReading from "../assets/indoor-hamster-reading.png";

function DisplayPicture ( weatherData ) {
    console.log(weatherData);
    const currentTemp = weatherData.weatherData.current_weather.temperature;
    const localTime = weatherData.weatherData.current_weather.time;
    const numericalHour = moment(localTime).format("k");

    if (currentTemp >= 20) {
        return (
            <div className="image-container">
                <img src={penguinWarm} />
                <p>Put on them shorts!</p>
            </div>
        ) 
    } else if (currentTemp >=10 && currentTemp <=20) {
        return (
            <div className="image-container">
                <img src={sleepySloth} />
                <p>Not too cold, not too hot. Maybe stay in?</p>
            </div>
        ) 
    } 
    else if (currentTemp >=-5 && currentTemp <=10) {
        return (
            <div className="image-container">
                <img src={hamsterReading} />
                <p>Kinda chilly.</p>
            </div>
        ) 
    } 
    else {
        return (
            <div className="image-container">
                <img src={penguinCold} />
                <p>Kinda chilly.</p>
            </div>
        )
        }
}

export default DisplayPicture;