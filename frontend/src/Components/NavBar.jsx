import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <div className='header-container'>
        <h1>Meme-A-Gram</h1>
        <nav>
          <span><Link to='/create' >ADD</Link></span>
        </nav>
      </div>
    </header>
  )
}

export default NavBar