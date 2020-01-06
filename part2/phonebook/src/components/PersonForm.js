import React from 'react'
import personService from '../services/persons'

const PersonForm = ({ values, setters, handlers }) => {
  const [newName, newNumber, persons] = values
  const [setNewName, setNewNumber, setPersons] = setters
  const [handleNameChange, handleNumberChange] = handlers

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const id = persons.findIndex(person => person.name === newName)
    if (id !== -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
        .update(persons[id].id, newPerson)
        .then((updatedPerson) => {
          persons[id] = updatedPerson
          setPersons([...persons])
        })
      }
    } else {
      personService
      .create(newPerson)
      .then((addedPerson) => {
        setPersons(persons.concat(addedPerson))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
      <form onSubmit={addPerson}>
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
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm