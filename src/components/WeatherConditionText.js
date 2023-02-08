function WeatherConditionText ( weatherCondition ) {
    if (weatherCondition.condition >= 51 && weatherCondition.condition <= 67) {
        return (
            <p>But bring an umbrella, it's raining!</p>
        ) 
    } else if (weatherCondition.condition >= 71 && weatherCondition.condition <= 77) {
        return (
            <p>Get your mitts on, it's snowing!</p>
        ) 
    } else if (weatherCondition.condition >= 95 && weatherCondition.condition <= 99) {
        return (
            <p>But watch out! It's thundering!</p>
        ) 
    } else if (weatherCondition.condition >= 0 && weatherCondition.condition <=  3) {
        return (
            <p>Have a beautiful day!</p>
        ) 
    } else {
        return (
            <p>Have a great day!</p>
        )
    }
}

export default WeatherConditionText;