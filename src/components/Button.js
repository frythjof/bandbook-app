import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid deeppink;
`

export default class Button extends Component {
  render() {
    return <StyledButton>{this.props.text}</StyledButton>
  }
}
