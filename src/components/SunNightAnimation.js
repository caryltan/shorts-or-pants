import sun from "../assets/sun-solo.png";
import moon from "../assets/moon-solo.png";


function SunNightAnimation ( nightDay ) {
    console.log(nightDay.nightDay);
    
    if (nightDay.nightDay >= 8 && nightDay.nightDay <=17) {
        return (
            <div class="sunMoonContainer">
                <img src={sun} className="sunMoon"/>
            </div>
        ) 
    } else {
        return (
            <div class="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </div>
        )
    }
}

export default SunNightAnimation;