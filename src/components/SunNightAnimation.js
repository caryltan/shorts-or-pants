import sun from "../assets/sun-solo.png";
import moon from "../assets/moon-solo.png";
import { motion } from "framer-motion"
import { useEffect } from "react";


function SunNightAnimation ( nightDay ) {
    
    if (nightDay.nightDay >= 8 && nightDay.nightDay <=17) {
        return (
            <motion.div 
            key={sun}
            animate={{ y: -400, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={sun} className="sunMoon"/>
            </motion.div>
            // <div className="sunMoonContainer">
            //     <img src={sun} className="sunMoon"/>
            // </div>
        ) 
    } else {
        return (
            <motion.div 
            key={moon}
            animate={{ y: -400 }} 
            transition={{ ease: "easeOut", duration: 1 }}
            className="sunMoonContainer">
                <img src={moon} className="sunMoon"/>
            </motion.div>
        )
    }
}

export default SunNightAnimation;