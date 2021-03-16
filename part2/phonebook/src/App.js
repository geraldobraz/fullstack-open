import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
    };

    const personNameAlreadyExists = persons.find(person => person.name === newName);

    if (personNameAlreadyExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    setPersons([...persons, newPerson]);
  }
  
  const handlePersonChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <div key={i}>{person.name}</div>)}
    </div>
  )
}

export default App