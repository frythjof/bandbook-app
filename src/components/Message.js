import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.span`
  display: block;
  text-align: left;
  margin: 0 10px;
  cursor: default;
`

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props

    return <TextWrapper data-cy="Message">{text}</TextWrapper>
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
