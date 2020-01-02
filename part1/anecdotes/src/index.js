import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = new Array(anecdotes.length).fill(0);

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const Button = (props) => (
  <button onClick={props.handleClick}>
      {props.text}
  </button>
)

const Anecdotes = ({selected,votes,handlers}) => {
  const [handleSelected,handleVoted] = handlers
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button handleClick={handleVoted} text='vote' />
      <Button handleClick={handleSelected} text='next anecdote' />
    </div>
  )
}

const Anecdote = ({votes}) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(points)

  const handleSelected = () => {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  const handleVoted = () => {
    const copy = [...voted]
    copy[selected] += 1
    setVoted(copy)
  }

  return (
    <>
      <Anecdotes selected={selected} votes={voted} handlers={[handleSelected,handleVoted]} />
      <Anecdote votes={voted} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)