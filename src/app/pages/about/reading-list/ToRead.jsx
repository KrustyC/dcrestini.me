import map from 'lodash/map'
import React from 'react'
import books from './toRead.json'

const Finished = () => (
  <ul>
    {map(books, book => (
      <li>{book.name}</li>
    ))}
  </ul>
)

export default Finished
