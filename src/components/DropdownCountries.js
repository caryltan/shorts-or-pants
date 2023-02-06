function DropdownCountries ({ locations, selectCountry, handleChange }){
    return (
        <div>
            <select onChange={handleChange} value={selectCountry} className="dropdown">
            {
                locations && locations.map((location, index) => {
                    return (
                        <option key={index} value={location.country}>{location.country}</option>
                    )
                })
            }
            </select>
        </div>
    );
}

export default DropdownCountries;