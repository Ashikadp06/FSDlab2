import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>

        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  ) 
}
export default Navbar;