import React from 'react'

function ReactProps({ name = 'Guest' }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
    </div>
  )
}

export default ReactProps
