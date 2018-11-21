import React, { Component } from 'react'
import styled from 'styled-components'

const TextWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`

export default class Message extends Component {
  render() {
    const { text } = this.props

    return <TextWrapper>{text}</TextWrapper>
  }
}

// <span className="delete" onClick={onDelete}> &times; </span>
//
// .delete {
//   &:hover {
//     color: red;
//   }
// }
