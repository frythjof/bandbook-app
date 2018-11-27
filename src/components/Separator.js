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
  margin: 0 5px;
`

const Line = styled.div`
  width: 100%;
  border-bottom: ${props => props.width || 4}px solid black;
  border-radius: 40%;
`

export default class Separator extends Component {
  static propTypes = {
    firstname: PropTypes.string.isRequired,
    width: PropTypes.number,
    timestamp: PropTypes.string.isRequired
  }

  render() {
    return (
      <Wrapper data-cy="Separator">
        <NameDate>{this.props.firstname}</NameDate>
        <Line width={this.props.width} />
        <NameDate>{this.props.timestamp}</NameDate>
      </Wrapper>
    )
  }
}
