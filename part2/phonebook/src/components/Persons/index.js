import React from 'react';

const Persons = ({ personsToShow, deleteContact }) => {
  return (
    <>
      {personsToShow.map((person, i) => (
        <div key={i}>{person.name} {person.number} <button onClick={e => deleteContact(person)}>delete</button></div>

      ))}
    </>
  );
}

export default Persons;