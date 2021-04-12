import React from 'react';

const CountryDetails = ({ country }) => {
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
  </>
  );
}

export default CountryDetails;