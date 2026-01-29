import React from "react";
import "./countriesCard.css";

const CountriesCard = ({flag, name}) => {
    return(
        <div className="countryCard">
            <img src={flag} alt={name} className="card-img"/>
            <h2>{name}</h2>        
        </div>
    )
}

export default CountriesCard;