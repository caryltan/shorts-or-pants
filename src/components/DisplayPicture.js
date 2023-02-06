import penguinWarm from "../assets/summer-penguin-swim.png";
import penguinCold from "../assets/winter-penguin-icecream.png";
import sleepySloth from "../assets/sleepy-sloth-coffee.png";
import hamsterReading from "../assets/indoor-hamster-reading.png";

function DisplayPicture ( currentTemp ) {
    if (currentTemp.currentTemp >= 20) {
        return (
            <div className="image-container">
                <img src={penguinWarm} />
                <p>Put on them shorts!</p>
            </div>
        ) 
    } else if (currentTemp.currentTemp >=10 && currentTemp.currentTemp <=20) {
        return (
            <div className="image-container">
                <img src={sleepySloth} />
                <p>Not too cold, not too hot. Maybe stay in?</p>
            </div>
        ) 
    } 
    else if (currentTemp.currentTemp >=-5 && currentTemp.currentTemp <=10) {
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