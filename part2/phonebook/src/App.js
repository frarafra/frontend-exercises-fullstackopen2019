import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import { Notification, Error } from './components/Message'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Error message={error} />
      <Filter filter={newFilter} handler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        values={[newName, newNumber, persons]}
        setters={[setNewName, setNewNumber, setPersons, setNotification, setError]}
        handlers={[handleNameChange, handleNumberChange]}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter} setter={setPersons}/>
    </div>
  )
}

export default App