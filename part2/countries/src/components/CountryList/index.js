
import React, { useCallback, useState } from 'react';
import CountryDetails from '../CountryDetails';

const CountryList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);


  const FormattedList = useCallback(() => {
    const total = countries.length;
    if (total === 0) {
      return (
        <div></div>
      )
    } else if (total === 1) {
      return (
        <CountryDetails country={countries[0]} />
      );
    } else if (total <= 10) {
      return (
        <div>
          {countries.map((country, idx) => (
            <div key={idx}>{country.name} <button onClick={() => handleCountryClick(country)}>show</button></div>
          ))}
        </div>
      );
    } else {
      return (
        <p>Too many matches, specify another filter</p>
      );
    }

  }, [countries]);


  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  }

  return (
    <>
      {selectedCountry ? (<CountryDetails country={selectedCountry} />): (<FormattedList />)}
    </>
      

  );
}

export default CountryList;