
import React, { useCallback } from 'react';

const CountryList = ({ countries }) => {
  
  const FormattedList = useCallback(() => {
    const total = countries.length;
    if (total === 0) {
      return (
        <div></div>
      )
    } else if (total === 1) {
      return (
        <>
          <h1>{countries[0].name}</h1>

          <p>capital: {countries[0].capital}</p>
          <p>population: {countries[0].population}</p>

          <h2>Languages</h2>
          
          <ul>
            {countries[0].languages.map((language, idx) => (
              <li key={idx}>{language.name}</li>
            ))}
          </ul>

          <img src={countries[0].flag} alt="Country Flag" height={250} width={500}/>
        </>
      );
    } else if (total <= 10) {
      return (
        <div>
          {countries.map((country, idx) => (
            <div key={idx}>{country.name}</div>
          ))}
        </div>
      );
    } else {
      return (
        <p>Too many matches, specify another filter</p>
      );
    }

  }, [countries]);


  return (
    <div>
      <FormattedList />
    </div>
  );
}

export default CountryList;