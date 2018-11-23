import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
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
  border-radius: 40%;
`

export default class Separator extends Component {
  static propTypes = {
    //iconName: PropTypes.oneOf(['up', 'down','left', 'right']),
    onPost: PropTypes.func.isRequired,
    firstname: PropTypes.string.isRequired,
    width: PropTypes.number,
    timestamp: PropTypes.string.isRequired
  }

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
        <NameDate>{this.props.firstname}</NameDate>
        <Line width={this.props.width} />
        <NameDate>
          {this.props.timestamp || `${postingday} ⭑ ${postingtime}`}
        </NameDate>
      </Wrapper>
    )
  }
}
