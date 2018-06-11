import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Paragraph = styled.p`
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

const Reading = () => (
  <div className="columns is-mobile is-centered">
    <div className="column is-half is-narrow">
      <div className="box is-three-quarters">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <Paragraph>
                <Title>Paradox: The Nine Greatest Enigmas in Physics</Title>
                <hr />
                The book analyzes 9 great enigmas in physics. All of them used to be considered
                paradoxes but thanks to the work and intelligence of some of the greatest
                physicists of history, they've all been solved. What I love about the books is
                that the author, Jim Al-Khalili, explains through the paradoxes some of the most
                important theories and law of physics.
                All of them are explained in such a way that they can be read and understood even by
                people who has almost no knowledge about physics.
              </Paragraph>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <div className="level-item" aria-label="author">
                  <Icon className="icon">
                    <i className="fas fa-user-tie" aria-hidden="true" />
                  </Icon>
                  <Author>Jim Al-Khalili</Author>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item" aria-label="author">
                  <Icon className="icon">
                    <a href="www.google.com" target="_blank">
                      <i className="fas fa-link" aria-hidden="true" />
                    </a>
                  </Icon>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
)

export default Reading
