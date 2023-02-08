import React  from 'react';
//img assets
import penguinWarm from "../assets/summer-penguin-swim.png";
import penguinCold from "../assets/winter-penguin-icecream.png";
import sleepySloth from "../assets/sleepy-sloth-coffee.png";
import hamsterReading from "../assets/indoor-hamster-reading.png";
import penguinJuice from "../assets/penguin-juice.png";
import tigerHike from "../assets/tiger-hike.png";

function DisplayPicture ( weatherData ) {
    
    const currentTemp = weatherData.weatherData.current_weather.temperature;

    if (currentTemp >= 25) {
        return (
            <>
                <img src={penguinWarm} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Wear them shorts!</p>
            </>
        ) 
    } else if (currentTemp >=20 && currentTemp <=25) {
        return (
            <>
                <img src={penguinJuice} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Not too hot. Max shorts weather.</p>
            </>
        ) 
    } else if (currentTemp >=15 && currentTemp <=20) {
        return (
            <>
                <img src={tigerHike} />
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>PERFECT hiking weather. Wear shorts!</p>
            </>
        ) 
    } else if (currentTemp >=10 && currentTemp <=15) {
        return (
            <>
                <img src={hamsterReading} />
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>Kinda chilly. You can wear shorts...INSIDE.</p>
            </>
        ) 
    } else if (currentTemp >=0 && currentTemp <=10) {
        return (
            <>
                <img src={sleepySloth} />
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>Let's not deal with the weather today.</p>
            </>
        ) 
    } else {
        return (
            <>
                <img src={penguinCold} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Definitely pants weather.</p>
            </>
        )
        }
}

export default DisplayPicture;