import Dropdown from "./Dropdown.js";
import { useState, useEffect } from 'react';

function SelectLocation (){
    const [locations, setLocations] = useState([]);

    const locationsList = [
        {
            country: "Mexico",
            cities: [
                {cityname: "", longitude: 52, latitude: 52},
                {cityname: "", longitude: 52, latitude: 52},
                {cityname: "", longitude: 52, latitude: 52}
            ]
        },
        {
            country: "Canada",
            cities: [
                {cityname: "", longitude: 52, latitude: 52},
                {cityname: "", longitude: 52, latitude: 52},
                {cityname: "", longitude: 52, latitude: 52}
            ] 
        }
    ]
    
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        setLocations(locationsList);
      }, []);

    return (
        <div>
            <Dropdown locations={locations} handleChange={handleChange}/> 
            <Dropdown /> 
        </div>
    );
}

export default SelectLocation;