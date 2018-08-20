import React from 'react'
import map from 'lodash/map'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Section = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${prop('theme.colors.primary')};

  h1 {
    color: ${prop('theme.colors.light')};
  }
`

const Emojis = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: 80px;
`

const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;

  span:nth-child(1) {
    cursor: default;
  }
`

const list = [
  { emojy: '📕', description: 'Reading' },
  { emojy: '💻', description: 'Working on computer' },
  { emojy: '🚈', description: 'Travelling' },
  { emojy: '🔬', description: 'Science'},
  { emojy: '🍻', description: 'Having a beer with friends' },
  { emojy: '⚽', description: 'Football' },
  { emojy: '🏀', description: 'Basketball' },
  { emojy: '🎶', description: 'Listen to Music' }
]

const Interests = () => (
  <Section>
    <div className="container">
      {/* <h1 className="title">What I like the most</h1> */}
      <Emojis>
        {map(list, (x, i) => (
          <Item key={i}>
            <span
              className="tooltip"
              data-tooltip={x.description}
              role="img"
              aria-label={x.description}
            >
              {x.emojy}
            </span>
          </Item>
        ))}
      </Emojis>
    </div>
  </Section>
)

export default Interests
