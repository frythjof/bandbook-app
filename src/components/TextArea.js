import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  box-shadow: inset 2px 4px 4px #ddd;
  background: #fefefe;
  border: 0;
  border-radius: 5px;
  margin: 5px;
  padding: 6px;
  width: 100%;
  cursor: default;
`

export default class TextArea extends Component {
  render() {
    return <StyledTextarea placeholder={this.props.placeholder} />
  }
}
