import React, { useEffect, useState } from 'react';
import weatherAPI from '../../services/weatherAPI'

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    weatherAPI.get(`/current?access_key=${key}&query=${country.name}&units=m`).then(({ data }) => {
      setWeather(data);
    });
  }, [country.name]);
  
  return (
    <>
    <h1>{country.name}</h1>

    <p>capital: {country.capital}</p>

    <p>population: {country.population}</p>
    <h2>Languages</h2>
    
    <ul>
      {country.languages.map((language, idx) => (
        <li key={idx}>{language.name}</li>
      ))}
    </ul>

    <img src={country.flag} alt="Country Flag" height={250} width={500}/>

    <h2>Weather in {country.capital}</h2>

    <div>
      <strong>Temperature:</strong>{weather.current?.temperature} Celsius
    </div>

    <img src={weather.current?.weather_icons[0]} alt={weather.current?.weather_descriptions[0]} />

    <div>
      <strong>Wind:</strong>{weather.current?.wind_speed} mph direction {weather.current?.wind_dir}
    </div>
    
  </>
  );
}

export default CountryDetails;