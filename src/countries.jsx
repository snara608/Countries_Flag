import React from "react";
import  "./countries.css";
import CountriesCard from "./countriesCard";
import { useEffect, useState } from "react";


function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
   
        const fetchData = async () => {
            try {
                const res = await fetch("https://xcountries-backend.labs.crio.do/all");
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching data: ",  error);
            }
        }
    
        fetchData()
    }, [])
    

    return (
        <div className="mainCard"> 
            {countries.map((item) => (  
            <CountriesCard key={item.name} name={item.name} flag={item.flag}/>
            ))}
        </div>
    )
}

export default Countries;