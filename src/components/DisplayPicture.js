import penguinWarm from "../assets/penguin-ready-to-swim.png";
import penguinCold from "../assets/penguin-with-lollipop.png";

function DisplayPicture ( currentTemp ) {
    console.log(currentTemp.currentTemp);
    if (currentTemp.currentTemp >= 15) {
        return (
            <div class="image-container">
                <img src={penguinWarm} />
            </div>
        ) 
    } else {
        return (
            <div class="image-container">
                <img src={penguinCold} />
            </div>
        )
        }
}

export default DisplayPicture;