import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background: ${props => props.background || 'transparent'};
`

const NameDate = styled.em`
  white-space: nowrap;
  margin: 0 10px;
`

const Line = styled.div`
  width: 100%;
  border-bottom: ${props => props.width || 4}px solid black;
`

export default class Separator extends Component {
  render() {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const timestamp = new Date(year, month, day, hour, minute)
    const dateoptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
    const timeoptions = {
      hour: 'numeric',
      minute: 'numeric'
    }
    const postingday = timestamp.toLocaleDateString('de-DE', dateoptions)
    const postingtime = timestamp.toLocaleTimeString('de-DE', timeoptions)

    return (
      <Wrapper>
        <NameDate>{this.props.userfirstname}</NameDate>
        <Line width={3} />
        <NameDate>{`${postingday} ⭑ ${postingtime}`}</NameDate>
      </Wrapper>
    )
  }
}
