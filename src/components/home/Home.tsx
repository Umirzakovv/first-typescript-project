import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
      <Link to="/todos">Todos</Link>
      <Link to="/users">Users</Link>
      <Link to="/drag-drop">Drag Drop</Link>
    </div>
  )
}

export default Home