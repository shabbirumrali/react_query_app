import React from 'react'

const Navbar = ({ setPage }) => {
  return (
    <nav className='navbar'>
        <button onClick={() => setPage('people')} >People</button>
        <button onClick={() => setPage('planets')} >Planets</button>
    </nav>
  )
}

export default Navbar