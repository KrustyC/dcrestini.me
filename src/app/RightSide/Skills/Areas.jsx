import React, { Fragment } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'

import Badge from './Badge'
import areas from './areas'

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
  }
`

const Badges = styled.div`
  display: flex;
  flex-direction: row;
`

const Areas = () => (
  <Fragment>
    {map(areas, ({ title, values }) => (
      <Div>
        <h4>{title}</h4>
        <Badges>
          {map(values, text => <Badge text={text} />)}
        </Badges>
      </Div>
    ))}
  </Fragment>
)

export default Areas
