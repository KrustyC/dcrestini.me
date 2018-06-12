import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Paragraph = styled.div`
  text-align: justify;
  text-justify: inter-word;
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${prop('theme.colors.dark')};
`

const Author = styled.small`
  font-weight: bold;
  color: ${prop('theme.colors.dark')};
`

const Icon = styled.span`
  color: ${prop('theme.colors.info')};
`

const Book = ({ book }) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <Paragraph>
            <Title>{book.title}</Title>
            <hr />
            {book.description}
          </Paragraph>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item" aria-label="author">
              <Icon className="icon">
                <i className="fas fa-user-tie" aria-hidden="true" />
              </Icon>
              <Author>{book.author}</Author>
            </div>
          </div>
          <div className="level-right">
            {book.rating && (
              <div className="level-item" aria-label="author">
                <Author>{book.rating}/5</Author>
                <Icon className="icon">
                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-star" aria-hidden="true" />
                  </a>
                </Icon>
              </div>
            )}
            <div className="level-item" aria-label="author">
              <Icon className="icon">
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link" aria-hidden="true" />
                </a>
              </Icon>
            </div>
          </div>
        </nav>
      </div>
    </article>
  </div>
)

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.string
  }).isRequired
}

export default Book
