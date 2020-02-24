import React from 'react'

const Persons = ({ personsToShow }) => (
    <ul>
        {personsToShow.map(p => <li>{p.name} {p.number}</li>)}
    </ul>
)

export default Persons