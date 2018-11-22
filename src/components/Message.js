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

// <DeleteButton className="delete" onClick={onDelete}>&times;</DeleteButton>

// const DeleteButton = styled.button`
//   margin-left: auto;
//   background-color: deeppink;
//   color: white;
//   border-radius: 50%;
//   padding: 2px 5px;
//   font-weight: bold;

//   .delete {
//    &:hover {
//      color: red;
//    }
//  }
// `
