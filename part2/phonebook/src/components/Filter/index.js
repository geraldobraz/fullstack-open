import React from 'react';

const Filter = ({ handleSearchPersons, searchedName }) => {
  return (
    <div>
      Filter shown with : <input value={searchedName} onChange={handleSearchPersons}/>
    </div>
  );
}

export default Filter;