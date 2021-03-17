import React, { useMemo, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchedName, setSearchedName ] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const personNameAlreadyExists = persons.find(person => person.name === newName);

    if (personNameAlreadyExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    setPersons([...persons, newPerson]);
  }
  
  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  
  const handleSearchPersons = (e) => {
    setSearchedName(e.target.value);
  };

  const personsToShow = useMemo(() => {
    if (searchedName === '') {
        return persons;
    } else {
      return persons.filter(person => person.name.toLowerCase().includes(searchedName));
    }
  }, [persons, searchedName]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchedName={searchedName} handleSearchPersons={handleSearchPersons} />
      <h3>Add a new</h3>
      <PersonForm 
        onFormSubmit={onFormSubmit}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App