import React from "react";
import  "./countries.css";
import { useEffect, useState } from "react";


const CountriesCard = ({flag, abbr, name}) => {
    return(
        <div className="countryCard">
            <img src={flag} alt={`Flag of ${abbr}`} className="card-img"/>
            <h2>{name}</h2>        
        </div>
    )
}



function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
   
        const fetchData = async() => {
            try{
            const res = await fetch("https://xcountries-backend.labs.crio.do/all");
            const data = await res.json();
            setCountries(data);
            } catch(error){
                console.error("error fetching data", error);
                return[];
            }
        }
    
        fetchData()
    }, [])
    

    return (
        <div className="mainCard"> 
            {countries.map((item) => (  
            <CountriesCard name={item.name} abbr={item.abbr} flag={item.flag}/>
            ))}
        </div>
    )
}

export default Countries;