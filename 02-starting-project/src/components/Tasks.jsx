import React from 'react'

const Tasks = ({ tasks }) => {
  return (
    <div>{tasks.map(({text}) => <div>{text}</div>)}</div>
  )
}

export default Tasks