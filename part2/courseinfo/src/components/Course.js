import React from 'react'

const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  const rows = () => parts.map(part => 
    <Part
      key={part.id}
      part={part} 
    />
  )

  return (
    <div>
      {rows()}
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <h3>total of {parts.reduce((sum, el) => (sum + el.exercises), 0)} exercises</h3>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course