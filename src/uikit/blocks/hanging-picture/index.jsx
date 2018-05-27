import React from 'react'
import styled from 'styled-components'

const Picture = styled.div`
  position: relative;
  z-index: 1;
`

const Hook = styled.div`
  width: 6px;
  height: 6px;
  background-color: black;
  margin: 0px 333px 32px auto;
  border-radius: 50%;
  box-shadow: 0 1px 0 1px #a49c7c;
  z-index: 1;
  &:before {
    content: '';
    width: 60px;
    height: 60px;
    border: 1px solid black;
    position: absolute;
    left: 180px; top: 13px;
    transform: rotate(45deg);
    z-index: -1;
  }
`

const Frame = styled.div`
  width: 400px;
  height: 275px;
  border-radius: 10px;
  border-top: 6px solid mediumaquamarine;
  border-right: 6px solid mediumaquamarine;
  border-bottom: 6px solid mediumaquamarine;
  border-left: 6px solid mediumaquamarine; 
  box-shadow: 5px 5px 0 0 lightgrey;
  background: white;
  padding: 0px;
  z-index: 1;
`
const Image = styled.img`
  z-index: 0;
  border: 5px solid white;
  border-radius: 5px;
`

const HangingPicture = () => (
  <Picture>
    <Hook />
    <Frame>
      <Image src="assets/img/profile.jpeg" />
    </Frame>
  </Picture>
)


export default HangingPicture
