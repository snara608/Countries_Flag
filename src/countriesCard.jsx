import React from "react";

const CountriesCard = ({flag, name}) => {
    return(
        <div className="countryCard">
            <img src={flag} alt={name} className="card-img"/>
            <h2>{name}</h2>        
        </div>
    )
}

export default CountriesCard;