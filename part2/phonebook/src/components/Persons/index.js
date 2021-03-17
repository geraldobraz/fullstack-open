import React from 'react';

const Persons = ({ personsToShow }) => {
  return (
    <>
      {personsToShow.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
    </>
  );
}

export default Persons;