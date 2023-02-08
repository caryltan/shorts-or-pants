import sun from "../assets/sun-solo.png";
import moon from "../assets/moon-solo.png";
import { motion } from "framer-motion"

function SunNightAnimation ( nightDay ) {
    const viewPortWidth = window.innerWidth;
    console.log(viewPortWidth);

    if (viewPortWidth > 768 && nightDay.nightDay >= 8 && nightDay.nightDay <=17) {
        return (
            <motion.div 
            key={sun}
            animate={{ y: -350 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={sun} className="sunMoon"/>
            </motion.div>
        ) 
    } else if (viewPortWidth <= 428 && nightDay.nightDay >= 8 && nightDay.nightDay <=17) {
        return (
            <motion.div 
            key={sun}
            animate={{ y: -300 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={sun} className="sunMoon"/>
            </motion.div>
        ) 
    } else if (viewPortWidth <= 428 && nightDay.nightDay >= 18 ) {
        return (
            <motion.div 
            key={moon}
            animate={{ y: -300 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </motion.div>
        ) 
    } else if (viewPortWidth <= 428 && nightDay.nightDay <= 7 ) {
        return (
            <motion.div 
            key={moon}
            animate={{ y: -300 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </motion.div>
        ) 
    } else if (viewPortWidth > 768 && nightDay.nightDay >= 18){
        return (
            <motion.div 
            key={moon}
            animate={{ y: -350 }} 
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </motion.div>
        )
    } else {
        return (
            <motion.div 
            key={moon}
            animate={{ y: -350 }} 
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </motion.div>
        )
    }
}

export default SunNightAnimation;