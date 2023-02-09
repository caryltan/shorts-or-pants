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
                <img src={penguinWarm} alt="Cartoon penguin wearing a life saver floaty, ready for a hot, hot swim"/>
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Wear them shorts!</p>
            </>
        ) 
    } else if (currentTemp >=20 && currentTemp <=25) {
        return (
            <>
                <img src={penguinJuice} alt="Cartoon penguin lounging in a chair with a juice in hand and loving life"/>
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Not too hot. Max shorts weather.</p>
            </>
        ) 
    } else if (currentTemp >=15 && currentTemp <=20) {
        return (
            <>
                <img src={tigerHike} alt="Cartoon tiger with a backpack, ready to go places"/>
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>PERFECT hiking weather. Wear shorts!</p>
            </>
        ) 
    } else if (currentTemp >=10 && currentTemp <=15) {
        return (
            <>
                <img src={hamsterReading} alt="Cartoon hamster sitting down and reading a book"/>
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>Kinda chilly. You can wear shorts...INSIDE.</p>
            </>
        ) 
    } else if (currentTemp >=0 && currentTemp <=10) {
        return (
            <>
                <img src={sleepySloth} alt="Cartoon sloth holding a coffee mug and looking like they're just having enough of life"/>
                <p className="tempText">It's {currentTemp}°C.</p> 
                <p>Let's not deal with the weather today.</p>
            </>
        ) 
    } else {
        return (
            <>
                <img src={penguinCold} alt="Cartoon penguin wearing a winter hat and scarf yet also eating ice cream in cold weather"/>
                <p className="tempText">It's {currentTemp}°C.</p>
                <p>Definitely pants weather.</p>
            </>
        )
        }
}

export default DisplayPicture;