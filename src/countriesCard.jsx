import React from "react";
import "./countriesCard.css";

const CountriesCard = ({flag, name, abbr}) => {
    return(
        <div className="countryCard">
            <img src={flag} alt={abbr} className="card-img"/>
            <h2>{name}</h2>        
        </div>
    )
}

export default CountriesCard;