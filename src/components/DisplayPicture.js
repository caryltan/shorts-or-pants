import React  from 'react';
//img assets
import penguinWarm from "../assets/summer-penguin-swim.png";
import penguinCold from "../assets/winter-penguin-icecream.png";
import sleepySloth from "../assets/sleepy-sloth-coffee.png";
import hamsterReading from "../assets/indoor-hamster-reading.png";

function DisplayPicture ( weatherData ) {
    
    const currentTemp = weatherData.weatherData.current_weather.temperature;

    if (currentTemp >= 20) {
        return (
            <>
                <img src={penguinWarm} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>aweba</p>
            </>
        ) 
    } else if (currentTemp >=10 && currentTemp <=20) {
        return (
            <>
                <img src={sleepySloth} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>aweba</p>
            </>
        ) 
    } 
    else if (currentTemp >=-5 && currentTemp <=10) {
        return (
            <>
                <img src={hamsterReading} />
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>Kinda chilly.</p>
            </>
        ) 
    } 
    else {
        return (
            <>
                <img src={penguinCold} />
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Kinda chilly.</p>
            </>
        )
        }
}

export default DisplayPicture;