function WeatherConditionText ( weatherCondition ) {
    if (weatherCondition.condition >= 51 && weatherCondition.condition <= 67) {
        return (
         <div>It's Raining</div>
        ) 
    } else if (weatherCondition.condition >= 71 && weatherCondition.condition <= 77) {
        return (
            <div>It's Snow'in</div>
        ) 
    } else if (weatherCondition.condition >= 95 && weatherCondition.condition <= 99) {
        return (
            <div>It's Thundermnnnclap clap popp</div>
        ) 
    } else if (weatherCondition.condition >= 0 && weatherCondition.condition <=  3) {
        return (
            <div>Have a beautiful day!</div>
        ) 
    } else {
        return (
            <div>Weather</div>
        )
    }
}

export default WeatherConditionText;