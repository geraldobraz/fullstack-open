import React, { useEffect, useMemo, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import api from './services/api';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  
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
    
    api.create(newPerson).then(({ data }) => {
      const temp = [...persons, { ...newPerson, id: data}];
      console.log(temp);
      setPersons(temp);
    });
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

  const handleContactDeletion = (person) => {
    window.confirm(`Delete ${person.name}`) && 
    api.deleteById(person.id).then(res => {
      setPersons(persons.filter(({id}) => person.id !== id));
    });
  };

  const personsToShow = useMemo(() => {
    if (searchedName === '') {
        return persons;
    } else {
      return persons.filter(person => person.name.toLowerCase().includes(searchedName));
    }
  }, [persons, searchedName]);


  useEffect(() => {
    api.getAll('/persons').then(({ data }) => {
      setPersons(data)
    });
  }, []);

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
      <Persons deleteContact={handleContactDeletion} personsToShow={personsToShow} />
    </div>
  )
}

export default App