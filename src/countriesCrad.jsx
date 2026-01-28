import React from "react";

const CountriesCard = ({flag, abbr, name}) => {
    return(
        <div className="countryCard">
            <img src={flag} alt={`Flag of ${abbr}`} className="card-img"/>
            <h2>{name}</h2>        
        </div>
    )
}

export default CountriesCard;