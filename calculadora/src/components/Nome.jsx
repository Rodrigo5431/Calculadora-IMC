import React from 'react'
import './Nome.css';

export default function Nome({nome}) {
  return (
    <footer>
        <h1 className='name'>Nome: {nome}</h1>
    </footer>
  )
}
