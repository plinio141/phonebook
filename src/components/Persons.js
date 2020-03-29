import React from 'react'

const confirmMessage = (name) =>{
    return window.confirm(`Delete ${name}`);
}

const Persons = ({ personsToShow, removePerson }) => (
    <ul>
        {personsToShow.map(p => <li>{p.name} {p.number} <button onClick={()=>{confirmMessage(p.name) && removePerson(p.id)}}>delete</button></li>)}
    </ul>
)

export default Persons