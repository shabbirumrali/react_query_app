import React from 'react'

const Person = ({ person }) => {
  return (
    <div className='card'>
        <h3>{person.name}</h3>
        <p>Skin Color - {person.skin_color}</p>
        <p>Date of Birth - {person.birth_year}</p>
    </div>
  )
}

export default Person