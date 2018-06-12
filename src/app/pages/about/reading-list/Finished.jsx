import map from 'lodash/map'
import React from 'react'
import styled from 'styled-components'

import Book from './Book'
import books from './finished.json'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`

const Finished = () => (
  <Grid>
    {map(books, (book, key) => <Book book={book} key={key} />)}
  </Grid>
)

export default Finished
