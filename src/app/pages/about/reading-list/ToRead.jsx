import map from 'lodash/map'
import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import books from './toRead.json'

const Title = styled.span`
  font-size: 16px;
  color: ${prop('theme.colors.dark')};
`

const Icon = styled.span`
  color: ${prop('theme.colors.info')};
`

const Finished = () => (
  <ul>
    {map(books, (book, key) => (
      <div className="box" key={key}>
        <article className="media">
          <div className="media-content">
            <div className="level">
              <div className="level-left">
                <Title><b>{book.title}</b>, by {book.author}</Title>
              </div>
              <div className="level-right">
                <Icon className="icon">
                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link" aria-hidden="true" />
                  </a>
                </Icon>
              </div>
            </div>
          </div>
        </article>
      </div>
    ))}
  </ul>
)

export default Finished
