import React, { useState } from 'react'

const Filter = ({ addPerson, findName }) => {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')


    const addName = (event) => {
        event.preventDefault()
        if(findName(newName)){
            alert(`${newName} is already added to phonebook`);
            return;
        }
        addPerson({ newName, newNumber });
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

export default Filter