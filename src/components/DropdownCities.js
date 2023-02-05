function DropdownCities ({ locations, selectCountry, getCityCoordinates }){
    return (
        <div>
            {locations && locations.map((location) => {
                if (selectCountry === location.country) {
                    return (
                        <select onChange={getCityCoordinates}>
                            {
                                location.cities && location.cities.map((city, index) => {
                                    return (
                                        <option key={index} value={city.cityname}>{city.cityname}</option>
                                    )
                                })
                            }
                        </select>
                    )
                }
            })
            }  
        </div>
    );
}  

export default DropdownCities;