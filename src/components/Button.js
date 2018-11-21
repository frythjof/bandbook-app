import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid black;
  background: #fefefe;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;
`

export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onPost}>{this.props.text}</StyledButton>
    )
  }
}
