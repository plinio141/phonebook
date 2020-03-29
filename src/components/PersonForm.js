import React, { useState } from 'react'

const PersonForm = ({ addPerson, findName, updatePerson }) => {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')


    const addName = (event) => {
        event.preventDefault()
        const person = findName(newName);
        if(person){
            const confirm = window.confirm(`${person.name} is already added to phonebook, replace the old number whith a new one`);
            confirm && updatePerson({...person, number: newNumber})
        } else{
            addPerson({ newName, newNumber });
        }
        setNewName('');
        setNewNumber('');
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
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
    )
}

export default PersonForm