import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 465464 }
  ])

  const [ filterInput, setFilterInput ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const personsToShow = persons.filter(person => person.name.indexOf(filterInput) > -1)

  const findName = (newName) => {
    return persons.find(a => a.name === newName)
  }

  const addPerson = ({ newName, newNumber }) => {
    const newPersons = persons.concat([{name: newName, number: newNumber}]);
    setPersons(newPersons);
  }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
  }

  return (
    <div>
      <Filter filterInput={filterInput} handleFilterChange={handleFilterChange} />
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} findName = {findName} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App