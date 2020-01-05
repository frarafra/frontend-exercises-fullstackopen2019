import React from 'react'

const Person = ({ name, number }) => {
  return (
    <>
      {name} {number}<br />
    </>
  )
}

const Persons = ({ persons, filter }) => {
  const rows = () => persons
    .filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))  
    .map(person =>
    <Person
      key={person.name}
      name={person.name}
      number={person.number}
    />)  

  return (
    <>
      {rows()}
    </>
  )
}

export default Persons