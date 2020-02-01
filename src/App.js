import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 465464 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterInput, setFilterInput ] = useState('ccccccccc')

  const personsToShow = persons.filter(person => person.name.indexOf(filterInput) > -1)

  const findName = () => {
    return persons.find(a => a.name === newName)
  }

  const addName = (event) => {
    event.preventDefault()
    if(findName()){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersons = persons.concat([{name: newName, number: newNumber}]);
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
  }

  return (
    <div>
      <div>
        flter shown with: <input
          value={filterInput}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(p => <li>{p.name} {p.number}</li>)}
      </ul>
    </div>
  )
}

export default App