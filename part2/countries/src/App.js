import React, { useState } from 'react';
import api from './services/api';
import CountryList from './components/CountryList'

const App = () => {
  const [countryName, setCountryName] = useState('');
  const [countriesList, setCountriesList] = useState([]);

  const handleCountryChange = async (e) => {
    const country = e.target.value;
    setCountryName(country);
    
    if (country === '') {
      return;
    }
    const { data } = await api.get(`/name/${country}`);
    setCountriesList(data);
  };


  return (
    <div>
      Find countries <input value={countryName} onChange={handleCountryChange} />

      {countryName !== '' && (
        <CountryList countries={countriesList} />
      )}
    </div>
  )
}

export default App