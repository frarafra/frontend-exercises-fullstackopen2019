import React from 'react'
import personService from '../services/persons'

const Person = ({ person, persons, setPersons }) => {
  const { id, name, number } = person

  const deletePerson = () => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <>
      {name} {number} <button onClick={deletePerson}>delete</button><br />
    </>
  )
}

const Persons = ({ persons, filter, setter }) => {
  const rows = () => persons
    .filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))  
    .map(person =>
    <Person
      key={person.id}
      person={person}
      persons={persons}
      setPersons={setter}
    />)  

  return (
    <>
      {rows()}
    </>
  )
}

export default Persons