import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import servicePerson from './services/index'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 465464 }
  ])

  const [ filterInput, setFilterInput ] = useState('')
  const [ notification, setNotification ] = useState({});

  const hook = () => {
    servicePerson.getAll().then(response => {
      setPersons(response);
    })
  }
  
  useEffect(hook, [])

  const personsToShow = persons.filter(person => person.name.indexOf(filterInput) > -1)

  const findName = (newName) => {
    return persons.find(a => a.name === newName)
  }

  const addPerson = ({ newName, newNumber }) => {
    servicePerson.create({name: newName, number: newNumber})
      .then(person => {
        const newPersons = [...persons, person];
        setPersons(newPersons);
        setNotification({type:'success', message: `Added ${person.name}`});
      });
  }

  const removePerson = (id) => {
    servicePerson.remove(id).then(response => {
      const arrPerson = persons.filter(person => person.id !== id );
      setPersons(arrPerson);
    }).catch(error => {
      setNotification({type:'error', message: `Error in server`});
    });
  }

  const updatePerson = (person) => {
    servicePerson.update(person.id, person).then(personUpdated => {
      const arrPerson = persons.map(p => personUpdated.id === p.id ? personUpdated : p );
      setPersons(arrPerson);
    }).catch(error => {
      setNotification({type:'error', message: `Information of ${person.name} has already been removed from server`});
    });
  }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filterInput={filterInput} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} findName = {findName} updatePerson={updatePerson}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App