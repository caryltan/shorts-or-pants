function DropdownCountries ({ locations, handleChange }){
    return (
        <div>
            <select onChange={handleChange}>
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