import map from 'lodash/map'
import React from 'react'
import books from './finished.json'

const Finished = () => (
  <ul>
    {map(books, book => (
      <li>{book.name}</li>
    ))}
  </ul>
)

export default Finished
