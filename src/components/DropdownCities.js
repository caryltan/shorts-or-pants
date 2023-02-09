function DropdownCities ({ locations, selectCountry, getCityCoordinates }){
    return (
        <>
            {locations && locations.map((location) => {
                if (selectCountry === location.country) {
                    return (
                        <select aria-label="Select City" onChange={getCityCoordinates} className="dropdown">
                            <option>Select One</option>
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
        </>
    );
}  

export default DropdownCities;