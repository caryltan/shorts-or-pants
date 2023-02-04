function Dropdown ({ locations, handleChange }){
    return (
        <div>
            <select onChange={handleChange}>
            {
            locations && locations.map(location => {
                console.log(location)
                return (
                    <option value={location.country}>{location.country}</option>
                )
            })
            }
            </select>
        </div>
    );
}

export default Dropdown;