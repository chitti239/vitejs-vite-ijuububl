// write the book component code here
import React from 'react'
import './Bookcard.css'

const Bookcard = ({image,name,genre,author}) => {
  return (
    <div className='book-card'>
        <img src={image} alt={name} className='book-img'/>
        <h3>{name}</h3>
        <p><strong>Genre : </strong>{genre}</p>
        <p><strong>Author : </strong>{author}</p>
    </div>
  )
}

export default Bookcard
